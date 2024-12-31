// particleAnimation.js

export default function setupParticleAnimation(canvas) {
    if (!canvas) return () => {};

    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = Math.max(window.innerHeight, document.body.scrollHeight);
      };
      
      window.addEventListener("resize", resizeCanvas);
      resizeCanvas();

    // Partículas
    const particles = [];
    const numParticles = 100;

    class Particle {
        constructor(x, y, radius, speed) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.speed = speed;
            this.angle = Math.random() * Math.PI * 2;
        }

        update() {
            this.x += Math.cos(this.angle) * this.speed;
            this.y += Math.sin(this.angle) * this.speed;

            // Rebote con bordes
            if (this.x < 0 || this.x > canvas.width) {
                this.angle = Math.PI - this.angle;
            }
            if (this.y < 0 || this.y > canvas.height) {
                this.angle = -this.angle;
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(17, 157, 164, 0.8)';
            ctx.fill();
        }
    }

    // Inicializa las partículas
    for (let i = 0; i < numParticles; i++) {
        particles.push(
            new Particle(
                Math.random() * canvas.width,
                Math.random() * canvas.height,
                Math.random() * 8 + 4,
                Math.random() * 0.5 + 0.2
            )
        );
    }

    // Función para conectar partículas con líneas
    function connectParticles() {
        for (let a = 0; a < particles.length; a++) {
            for (let b = a + 1; b < particles.length; b++) {
                const dist = Math.hypot(
                    particles[a].x - particles[b].x,
                    particles[a].y - particles[b].y
                );
                if (dist < 120) {
                    ctx.strokeStyle = `rgba(17, 157, 164, ${1 - dist / 120})`;
                    ctx.lineWidth = 4;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    // Bucle de animación
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((particle) => {
            particle.update();
            particle.draw();
        });
        connectParticles();
        requestAnimationFrame(animate);
    }

    // Inicia la animación
    animate();

    // Retorna una función de limpieza para quitar eventos cuando se desmonte
    return () => {
        window.removeEventListener('resize', resizeCanvas);
    };
}