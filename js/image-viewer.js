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
