const devmsg = document.querySelector('.devmsg');
document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } = devmsg.getBoundingClientRect();
        
    // Calculate the center of the div
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Calculate the distance from the cursor to the center of the div
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    // Calculate the distance to move the div
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
    // Set the maximum distance for the effect
    const maxDistance = 50; // Adjust this value for more or less effect

    // Calculate the movement based on the distance
    const moveX = (deltaX / distance) * Math.min(distance, maxDistance);
    const moveY = (deltaY / distance) * Math.min(distance, maxDistance);

    // Apply the transformation
    devmsg.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
});

// Reset the position when the mouse leaves the div
devmsg.addEventListener('mouseleave', () => {
    devmsg.style.transform = 'translate(0, 0) scale(1)';
});