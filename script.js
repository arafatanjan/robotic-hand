// Select the hand group in the SVG
const hand = document.getElementById("hand");

// Calculate the center of the SVG hand
function getHandCenter() {
    const rect = hand.getBoundingClientRect();
    return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
    };
}

// Clamp function to limit the angle within a range
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

// Event listener to rotate hand based on cursor position with limits
document.addEventListener("mousemove", (event) => {
    const handCenter = getHandCenter();
    
    // Calculate the angle to the cursor in radians
    const angle = Math.atan2(event.clientY - handCenter.y, event.clientX - handCenter.x);
    
    // Convert radians to degrees
    const angleDeg = angle * (180 / Math.PI);
    
    // Clamp the angle to a maximum of ±10 degrees
    const limitedAngleDeg = clamp(angleDeg, -10, 10);
    
    // Convert the clamped angle back to radians for CSS transform
    const limitedAngleRad = limitedAngleDeg * (Math.PI / 180);
    
    // Apply the rotation with clamped angle
    hand.style.transform = `rotate(${limitedAngleRad}rad)`;
    hand.style.transformOrigin = "center";
});
