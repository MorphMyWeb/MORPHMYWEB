import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseColor: string;
}

export default function ReflectiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let nodes: Node[] = [];
    const maxNodes = 65; // Balanced density for 4K and performance
    const connectionDistance = 115; // Max distance to draw a line between nodes
    const mouseRadius = 180; // Distance of mouse influence

    // Setup dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initNodes();
    };

    // Color choices fitting the agency's purple/cyan tech palette
    const colors = [
      'rgba(168, 85, 247, 0.65)', // Purple
      'rgba(6, 182, 212, 0.65)',  // Cyan
      'rgba(236, 72, 153, 0.65)',  // Pink
      'rgba(99, 102, 241, 0.65)',  // Indigo
    ];

    const initNodes = () => {
      nodes = [];
      const densityMultiplier = Math.min(window.innerWidth / 1200, 1.5);
      const nodeCount = Math.floor(maxNodes * densityMultiplier);

      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.72, // Speed X
          vy: (Math.random() - 0.5) * 0.72, // Speed Y
          radius: Math.random() * 2 + 1, // Node circle size
          baseColor: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Deep, immersive tech-space background gradient
      const bgGrad = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        10,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height)
      );
      bgGrad.addColorStop(0, '#06040d');
      bgGrad.addColorStop(0.5, '#030206');
      bgGrad.addColorStop(1, '#010003');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw subtle background grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
      ctx.lineWidth = 1;
      const gridSize = 80;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Update positions & draw connections
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Move nodes
        node.x += node.vx;
        node.y += node.vy;

        // Bounce back from boundaries with a smooth cushion
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Keep coordinates contained inside viewing area
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));

        // Interaction with mouse position (pull effect)
        if (mx !== null && my !== null) {
          const dx = mx - node.x;
          const dy = my - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouseRadius) {
            // Apply slight magnetic attraction
            const force = (mouseRadius - distance) / mouseRadius;
            node.x += (dx / distance) * force * 1.5;
            node.y += (dy / distance) * force * 1.5;

            // Draw link to the mouse
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(mx, my);
            const intensity = (1 - distance / mouseRadius) * 0.15;
            ctx.strokeStyle = `rgba(168, 85, 247, ${intensity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Draw node circles
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.baseColor;
        ctx.fill();

        // Connect with other neighboring nodes close by
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);

            // Dynamic opacity based on node distance
            const alpha = (1 - distance / connectionDistance) * 0.18;
            
            // Luminous color blend between purple/cyan
            const gradient = ctx.createLinearGradient(node.x, node.y, other.x, other.y);
            gradient.addColorStop(0, node.baseColor.replace('0.65', String(alpha)));
            gradient.addColorStop(1, other.baseColor.replace('0.65', String(alpha)));

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeCanvas);
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    // Bootstrap
    resizeCanvas();
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 block pointer-events-none select-none bg-[#030206]"
    />
  );
}
