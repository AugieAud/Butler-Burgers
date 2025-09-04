// Image viewer functionality
document.addEventListener("DOMContentLoaded", function () {
  // Create modal elements
  const modal = document.createElement("div");
  modal.className = "image-modal";
  modal.style.display = "none";

  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  const modalImg = document.createElement("img");
  modalImg.className = "modal-img";

  const closeBtn = document.createElement("span");
  closeBtn.className = "close-modal";
  closeBtn.innerHTML = "&times;";

  // Create navigation arrows
  const prevBtn = document.createElement("div");
  prevBtn.className = "nav-arrow prev-arrow";
  prevBtn.innerHTML = "&#10094;";

  const nextBtn = document.createElement("div");
  nextBtn.className = "nav-arrow next-arrow";
  nextBtn.innerHTML = "&#10095;";

  // Add elements to modal
  modalContent.appendChild(closeBtn);
  modalContent.appendChild(modalImg);
  modalContent.appendChild(prevBtn);
  modalContent.appendChild(nextBtn);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Get all menu images
  const menuImages = document.querySelectorAll(".card-img-top");
  let currentImageIndex = 0;
  
  // Touch swipe variables
  let touchStartX = 0;
  let touchEndX = 0;
  let minSwipeDistance = 50; // Minimum distance required for a swipe

  // Function to show image at current index
  function showImage(index) {
    if (index < 0) index = menuImages.length - 1;
    if (index >= menuImages.length) index = 0;

    currentImageIndex = index;
    modalImg.src = menuImages[currentImageIndex].src;

    // Get the alt text and title from the original image
    const altText = menuImages[currentImageIndex].alt;
    const cardTitle =
      menuImages[currentImageIndex]
        .closest(".card")
        .querySelector(".card-title")?.textContent || "";

    // Update modal image attributes
    modalImg.alt = altText;
    modalImg.setAttribute("data-title", cardTitle);
  }

  // Add click event to each image
  menuImages.forEach((img, index) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", function () {
      currentImageIndex = index;
      modal.style.display = "block";
      showImage(currentImageIndex);
    });
  });

  // Previous button click event
  prevBtn.addEventListener("click", function () {
    showImage(currentImageIndex - 1);
  });

  // Next button click event
  nextBtn.addEventListener("click", function () {
    showImage(currentImageIndex + 1);
  });

  // Touch event handlers for swipe functionality
  modalContent.addEventListener("touchstart", function(event) {
    touchStartX = event.changedTouches[0].screenX;
  }, false);
  
  modalContent.addEventListener("touchend", function(event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
  }, false);
  
  // Handle the swipe gesture
  function handleSwipe() {
    // Calculate swipe distance
    const swipeDistance = touchEndX - touchStartX;
    
    // Check if swipe distance meets the minimum threshold
    if (Math.abs(swipeDistance) >= minSwipeDistance) {
      if (swipeDistance > 0) {
        // Swipe right - show previous image
        showImage(currentImageIndex - 1);
      } else {
        // Swipe left - show next image
        showImage(currentImageIndex + 1);
      }
    }
  }

  // Keyboard navigation
  document.addEventListener("keydown", function (event) {
    if (modal.style.display === "block") {
      if (event.key === "ArrowLeft") {
        showImage(currentImageIndex - 1);
      } else if (event.key === "ArrowRight") {
        showImage(currentImageIndex + 1);
      } else if (event.key === "Escape") {
        modal.style.display = "none";
      }
    }
  });

  // Close modal when clicking the close button
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the image
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
