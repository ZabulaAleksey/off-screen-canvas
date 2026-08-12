self.onmessage = function (event) {
    const canvas = event.data.canvas;
    const ctx = canvas.getContext('2d');

    canvas.width = 800;
    canvas.height = 600;

    const particles = [];

    for (let i = 0; i < 10000; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 3 + 1,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (const particle of particles) {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();

            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        }

        requestAnimationFrame(draw);


    }

    draw();

}

// self.onmessage = function (event) {
//     const canvas = event.data.canvas;
//     const ctx = canvas.getContext("2d");

//     canvas.width = 800;
//     canvas.height = 600;

//     const width = canvas.width;
//     const height = canvas.height;

//     const vertices = [
//         { x: -1, y: -1, z: -1 },
//         { x:  1, y: -1, z: -1 },
//         { x:  1, y:  1, z: -1 },
//         { x: -1, y:  1, z: -1 },
//         { x: -1, y: -1, z:  1 },
//         { x:  1, y: -1, z:  1 },
//         { x:  1, y:  1, z:  1 },
//         { x: -1, y:  1, z:  1 },
//     ];

//     const edges = [
//         [0,1], [1,2], [2,3], [3,0],
//         [4,5], [5,6], [6,7], [7,4],
//         [0,4], [1,5], [2,6], [3,7],
//     ];

//     let angle = 0;

//     function rotateY(point, angle) {
//         return {
//             x: point.x * Math.cos(angle) - point.z * Math.sin(angle),
//             y: point.y,
//             z: point.x * Math.sin(angle) + point.z * Math.cos(angle),
//         };
//     }

//     function rotateX(point, angle) {
//         return {
//             x: point.x,
//             y: point.y * Math.cos(angle) - point.z * Math.sin(angle),
//             z: point.y * Math.sin(angle) + point.z * Math.cos(angle),
//         };
//     }

//     function project(point) {
//         const distance = 4;
//         const scale = 250 / (distance + point.z);

//         return {
//             x: point.x * scale + width / 2,
//             y: point.y * scale + height / 2,
//         };
//     }

//     function draw() {
//         ctx.clearRect(0, 0, width, height);

//         const transformed = vertices.map((v) => {
//             let p = rotateY(v, angle);
//             p = rotateX(p, angle * 0.7);
//             return p;
//         });

//         const projected = transformed.map(project);

//         ctx.strokeStyle = "blue";
//         ctx.lineWidth = 2;

//         for (const [a, b] of edges) {
//             ctx.beginPath();
//             ctx.moveTo(projected[a].x, projected[a].y);
//             ctx.lineTo(projected[b].x, projected[b].y);
//             ctx.stroke();
//         }

//         angle += 0.02;
//         requestAnimationFrame(draw);
//     }

//     draw();
// };