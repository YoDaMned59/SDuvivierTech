import { useEffect, useRef } from 'react';

function MatrixBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Ajuster la taille du canvas à la fenêtre
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Caractères pour l'effet Matrix
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()*&^%';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];

    // Initialiser les positions de départ
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Fonction de dessin
    const draw = () => {
      // Fond semi-transparent pour l'effet de traînée
      ctx.fillStyle = 'rgba(10, 10, 31, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Couleur du texte
      ctx.fillStyle = '#0F0';
      ctx.font = fontSize + 'px monospace';

      // Dessiner les caractères
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Réinitialiser la position si la colonne atteint le bas
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    // Animation
    const interval = setInterval(draw, 33);

    // Nettoyage
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="matrix-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 0.15
      }}
    />
  );
}

export default MatrixBackground; 