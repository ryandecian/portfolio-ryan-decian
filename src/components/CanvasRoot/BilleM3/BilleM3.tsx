import { useEffect, useRef } from "react";
import "./BilleM3.css";
import { useState } from "react";

interface BilleM3Props {
  widthBilleM3: number;
  heightBilleM3: number;
}

function BilleM3(Props: BilleM3Props) {

  const { widthBilleM3, heightBilleM3 } = Props;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

/*------------------------------------------------------------*/
 /*Logique de calcul et récupération des dimensions écran*/
     // État pour les dimensions de l'écran
     const [dimensions, setDimensions] = useState({
      width: widthBilleM3,
      height: heightBilleM3,
      });
 // Calcule de l'indice de densité de point : 
   const indice = 300;
   const density = (1440 * 778 / indice);

 // État pour la valeur calculée de "screen"
   const [screen, setScreen] = useState(() => 
     (widthBilleM3 * heightBilleM3) / density);

 // Mettre à jour les dimensions de l'écran lors du redimensionnement
   useEffect(() => {
     const handleResize = () => {
       setDimensions({
         width: widthBilleM3,
         height: heightBilleM3,
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
     canvas.width = widthBilleM3;
     canvas.height = heightBilleM3;

     const colors = ["rgb(81, 162, 233)", "rgb(255, 77, 90)"];
     const dots = Array.from({ length: 300 }, () => createDot(canvas.width, canvas.height, colors));
     const mouse = { x: canvas.width / 2, y: canvas.height / 2 };
 
     const CONNECTION_DISTANCE = 50; // Distance entre les points connectés
     const DOTS_COUNT = screen; // Nombre de points géré par const indice
     const LINE_OPACITY = 0.5; // Augmenter la visibilité des lignes
     const LINE_WIDTH = 1.5; // Épaissir les lignes
     
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

    function drawDot(dot: typeof dots[number]) {
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
      ctx.fillStyle = dot.color;
      ctx.fill();
    }

    function updateDot(dot: typeof dots[number]) {
      if (dot.x + dot.radius > canvas.width || dot.x - dot.radius < 0) {
        dot.vx = -dot.vx;
      }
      if (dot.y + dot.radius > canvas.height || dot.y - dot.radius < 0) {
        dot.vy = -dot.vy;
      }
      dot.x += dot.vx;
      dot.y += dot.vy;
    }

    function connectDots() {
        for (let i = 0; i < dots.length; i++) {
            for (let j = i + 1; j < dots.length; j++) {
                const dx = dots[i].x - dots[j].x;
                const dy = dots[i].y - dots[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < CONNECTION_DISTANCE) {
                    ctx.beginPath();
                    ctx.moveTo(dots[i].x, dots[i].y);
                    ctx.lineTo(dots[j].x, dots[j].y);
                    ctx.strokeStyle = `rgba(81, 162, 233, ${LINE_OPACITY})`;
                    ctx.lineWidth = LINE_WIDTH;
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        updateDot(dot);
        drawDot(dot);
      });

      connectDots();
      requestAnimationFrame(animate);
    }

    function init(): void {
        dots.length = 0;
        for (let i = 0; i < DOTS_COUNT; i++) {
          dots.push(createDot(canvas.width, canvas.height, colors));
        }
      }

     canvas.addEventListener("mousemove", (event) => {
      const rect = canvas.getBoundingClientRect();
      const offsetX = 6; // Décalage horizontal en pixels
      const offsetY = 2;  // Décalage vertical en pixels
    
      mouse.x = event.clientX - rect.left + offsetX;
      mouse.y = event.clientY - rect.top + offsetY;
    });

    window.addEventListener("resize", () => {
      canvas.width = widthBilleM3;
      canvas.height = heightBilleM3;
      dots.length = 0;
      init();
    });

    init();
    animate();
  }, [screen]);

  return <canvas ref={canvasRef} className="bille-canvasM3" />;
};

export default BilleM3;
