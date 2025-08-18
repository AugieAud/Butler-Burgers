// Image viewer functionality
document.addEventListener('DOMContentLoaded', function() {
  // Create modal elements
  const modal = document.createElement('div');
  modal.className = 'image-modal';
  modal.style.display = 'none';
  
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  
  const modalImg = document.createElement('img');
  modalImg.className = 'modal-img';
  
  const closeBtn = document.createElement('span');
  closeBtn.className = 'close-modal';
  closeBtn.innerHTML = '&times;';
  
  modalContent.appendChild(closeBtn);
  modalContent.appendChild(modalImg);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  
  // Get all menu images
  const menuImages = document.querySelectorAll('.card-img-top');
  
  // Add click event to each image
  menuImages.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
      modal.style.display = 'block';
      modalImg.src = this.src;
    });
  });
  
  // Close modal when clicking the close button
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });
  
  // Close modal when clicking outside the image
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
