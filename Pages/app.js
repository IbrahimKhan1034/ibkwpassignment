const images = document.querySelectorAll('figure img');
    const captions = document.querySelectorAll('.caption');
    let currentImage = 0;

    // Show the current image and hide others
    function updateImageDisplay() {
        images.forEach((img, index) => {
            img.style.display = index === currentImage ? 'block' : 'none';
            captions[index].style.display = index === currentImage ? 'block' : 'none'; // Show caption
        });
    }

    // Move to the next image
    function nextImage() {
        currentImage = (currentImage + 1) % images.length;
        updateImageDisplay();
    }

    // Move to the previous image
    function prevImage() {
        currentImage = (currentImage - 1 + images.length) % images.length;
        updateImageDisplay();
    }

    // Add event listeners to the buttons
    document.querySelector('.right-button').addEventListener('click', nextImage);
    document.querySelector('.left-button').addEventListener('click', prevImage);

    // Initial display
    updateImageDisplay();