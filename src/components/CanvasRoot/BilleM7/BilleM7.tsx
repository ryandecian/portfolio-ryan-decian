import React, { useEffect, useRef } from "react";
import "./BilleM7.css";
import { useState } from "react";

const BilleM7: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

/*------------------------------------------------------------*/
 /*Logique de calcul et récupération des dimensions écran*/
     // État pour les dimensions de l'écran
     const [dimensions, setDimensions] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
      });
 // Calcule de l'indice de densité de point : 
   const indice = 300;
   const density = (1440 * 778 / indice);

 // État pour la valeur calculée de "screen"
   const [screen, setScreen] = useState(() => 
     (window.innerWidth * window.innerHeight) / density);

 // Mettre à jour les dimensions de l'écran lors du redimensionnement
   useEffect(() => {
     const handleResize = () => {
       setDimensions({
         width: window.innerWidth,
         height: window.innerHeight,
         });
     };

 window.addEventListener("resize", handleResize);

 // Nettoyage
   return () => {
     window.removeEventListener("resize", handleResize);
   };
 }, []);


 // Recalculer "screen" lorsque les dimensions changent
   useEffect(() => {
     setScreen(dimensions.width * dimensions.height / density);
   }, [dimensions, density]);

 /*------------------------------------------------------------*/

  useEffect(() => {
    const canvas = canvasRef.current!;
    const context = canvas.getContext("2d");

    if (!context) {
      console.error("Contexte 2D introuvable !");
      return;
    }

    const ctx = context; // Utilisation d'une variable locale pour le contexte

    // Initialisation des dimensions du canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["rgb(81, 162, 233)", "rgb(255, 77, 90)"];
    const dots = Array.from({ length: screen }, () => createDot(canvas.width, canvas.height, colors)); // Nombre de points géré par const indice
    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    const CONNECTION_DISTANCE = 80; // Distance entre les points connectés
    const LINE_WIDTH = 1.5; // Épaissir les lignes
    const CURSOR_RADIUS = 200; // Rayon de transparence lien entre points
    const MIN_POINT_OPACITY = 0.3; //Opacité des points
    const MAX_DISTANCE = 300; // Distance d'opacité dynamique
    /* Les points qui sont plus proches du curseur deviennent plus visibles (avec une opacité*/
    /* proche de 1), tandis que ceux qui sont au-delà de cette distance (300 pixels ici)*/
    /* conservent une opacité minimale définie par MIN_POINT_OPACITY.*/

    function createDot(canvasWidth: number, canvasHeight: number, colors: string[]) {
      return {
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight,
        vx: (Math.random() * 2 - 1) * Math.random() * 2,
        vy: (Math.random() * 2 - 1) * Math.random() * 2,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    }

    function updateDot(dot: typeof dots[number], canvasWidth: number, canvasHeight: number) {
      if (dot.x + dot.radius > canvasWidth || dot.x - dot.radius < 0) {
        dot.vx = -dot.vx;
      }
      if (dot.y + dot.radius > canvasHeight || dot.y - dot.radius < 0) {
        dot.vy = -dot.vy;
      }
      dot.x += dot.vx;
      dot.y += dot.vy;
    }

    function drawDot(dot: typeof dots[number]) {
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);

      let opacity = MIN_POINT_OPACITY;
      if (mouse.x !== null && mouse.y !== null) {
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < MAX_DISTANCE) {
          opacity = Math.max(MIN_POINT_OPACITY, 1 - distance / CURSOR_RADIUS);
        }
      }

      ctx.fillStyle = dot.color.replace("rgb", "rgba").replace(")", `, ${opacity})`);
      ctx.fill();
    }

    function connectDots() {
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECTION_DISTANCE) {
            let opacity = 0.5;
            if (mouse.x !== null && mouse.y !== null) {
              const mouseDx = (dots[i].x + dots[j].x) / 2 - mouse.x;
              const mouseDy = (dots[i].y + dots[j].y) / 2 - mouse.y;
              const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

              if (mouseDistance < CURSOR_RADIUS) {
                opacity = 1 - mouseDistance / CURSOR_RADIUS;
              } else {
                opacity = 0;
              }
            }

            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(81, 162, 233, ${opacity})`;
            ctx.lineWidth = LINE_WIDTH;
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        updateDot(dot, canvas.width, canvas.height);
        drawDot(dot);
      });

      connectDots();
      requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", (event) => {
      const rect = canvas.getBoundingClientRect();
      const offsetX = 6; // Décalage horizontal en pixels
      const offsetY = 2;  // Décalage vertical en pixels
    
      mouse.x = event.clientX - rect.left + offsetX;
      mouse.y = event.clientY - rect.top + offsetY;
    });

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      dots.splice(0, dots.length, ...Array.from({ length: 300 }, () => createDot(canvas.width, canvas.height, colors)));
    });

    animate();
  }, [screen]);

  return <canvas ref={canvasRef} className="bille-canvasM7" />;
};

export default BilleM7;
