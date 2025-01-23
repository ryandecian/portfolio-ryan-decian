import { useEffect, useRef } from "react";
import "./BilleM7.css";

function BilleM7() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const context = canvas.getContext("2d");

    if (!context) {
      console.error("Contexte 2D introuvable !");
      return;
    }

    const colors = ["rgb(81, 162, 233)", "rgb(255, 77, 90)"];
    const CONNECTION_DISTANCE = 80; // Distance entre les points connectés
    const LINE_WIDTH = 1.5; // Épaisseur des lignes
    const CURSOR_RADIUS = 200; // Rayon d'influence de la souris
    const MIN_POINT_OPACITY = 0.3;
    const MAX_DISTANCE = 300; // Distance d'opacité dynamique

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth; // Largeur de la fenêtre
      canvas.height = document.body.scrollHeight; // Hauteur totale du contenu
    };

    updateCanvasSize(); // Mise à jour initiale

    // Gestion du redimensionnement de la fenêtre et du scroll
    window.addEventListener("resize", updateCanvasSize);
    window.addEventListener("scroll", updateCanvasSize);

    const dots = Array.from({ length: 300 }, () => createDot(canvas.width, canvas.height, colors));

    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };

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

    function drawDot(dot: typeof dots[number]) {
      context.beginPath();
      context.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);

      let opacity = MIN_POINT_OPACITY;
      if (mouse.x !== null && mouse.y !== null) {
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < MAX_DISTANCE) {
          opacity = Math.max(MIN_POINT_OPACITY, 1 - distance / CURSOR_RADIUS);
        }
      }

      context.fillStyle = dot.color.replace("rgb", "rgba").replace(")", `, ${opacity})`);
      context.fill();
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

            context.beginPath();
            context.moveTo(dots[i].x, dots[i].y);
            context.lineTo(dots[j].x, dots[j].y);
            context.strokeStyle = `rgba(81, 162, 233, ${opacity})`;
            context.lineWidth = LINE_WIDTH;
            context.stroke();
          }
        }
      }
    }

    function animate() {
      context.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        updateDot(dot);
        drawDot(dot);
      });

      connectDots();
      requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", (event) => {
      const rect = canvas.getBoundingClientRect();
      const offsetX = 6; // Décalage horizontal
      const offsetY = 2; // Décalage vertical

      mouse.x = event.clientX - rect.left + offsetX;
      mouse.y = event.clientY - rect.top + offsetY;
    });

    animate();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      window.removeEventListener("scroll", updateCanvasSize);
    };
  }, []);

  return <canvas ref={canvasRef} className="bille-canvasM7" />;
}

export default BilleM7;
