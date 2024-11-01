const images = document.querySelectorAll('figure img');
    const captions = document.querySelectorAll('.caption');
    let currentImage = 0;

    function updateImageDisplay() {
        images.forEach((img, index) => {
            img.style.display = index === currentImage ? 'block' : 'none';
            captions[index].style.display = index === currentImage ? 'block' : 'none';
        });
    }

    function nextImage() {
        currentImage = (currentImage + 1) % images.length;
        updateImageDisplay();
    }
    function prevImage() {
        currentImage = (currentImage - 1 + images.length) % images.length;
        updateImageDisplay();
    }
    document.querySelector('.right-button').addEventListener('click', nextImage);
    document.querySelector('.left-button').addEventListener('click', prevImage);

    updateImageDisplay();