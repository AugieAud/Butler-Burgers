// Script to handle placeholder images
document.addEventListener('DOMContentLoaded', function() {
  // Find all placeholder images
  const placeholderImages = document.querySelectorAll('img[src="images/placeholder.png"]');
  
  // For each placeholder image
  placeholderImages.forEach(img => {
    // Create a canvas element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions to match the image dimensions
    canvas.width = img.width || 400;
    canvas.height = img.height || 300;
    
    // Fill with light gray background
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add text
    ctx.fillStyle = '#666666';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Image Coming Soon', canvas.width / 2, canvas.height / 2);
    
    // Add the alt text if available
    if (img.alt) {
      ctx.font = 'italic 18px Arial';
      ctx.fillText(img.alt, canvas.width / 2, canvas.height / 2 + 30);
    }
    
    // Replace the src with the canvas data URL
    img.onload = null; // Prevent infinite loop
    img.src = canvas.toDataURL('image/png');
  });
});
