document.addEventListener("DOMContentLoaded", function() {
    const ball = document.getElementById("ball");
    let position = 0;
    let velocity = 0;
    const gravity = 0.5;
    const bounceFactor = 0.7;
    const ground = document.querySelector('.container').clientHeight - ball.clientHeight;

    function animate() {
        velocity += gravity;
        position += velocity;

        if (position > ground) {
            position = ground;
            velocity *= -bounceFactor;

            // Ensure the ball keeps bouncing
            if (Math.abs(velocity) < 1) {
                velocity = -10; // Reset the velocity to keep the ball bouncing
            }
        }

        ball.style.top = position + "px";

        requestAnimationFrame(animate);
    }

    animate();
});