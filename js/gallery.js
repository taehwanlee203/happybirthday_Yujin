document.addEventListener('DOMContentLoaded', function() {
    const fileUpload = document.getElementById('file-upload');
    const takePhotoBtn = document.getElementById('take-photo-btn');
    const photoGallery = document.getElementById('photo-gallery');
    const camera = document.getElementById('camera');
    const photoCanvas = document.getElementById('photo-canvas');
    const context = photoCanvas.getContext('2d');

    // Handle file upload
    fileUpload.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                addPhotoToGallery(e.target.result, 'Uploaded Photo');
            };
            reader.readAsDataURL(file);
        }
    });

    // Handle take photo
    takePhotoBtn.addEventListener('click', function() {
        if (camera.style.display === 'none') {
            startCamera();
        } else {
            takePhoto();
        }
    });

    // Start camera
    function startCamera() {
        camera.style.display = 'block';
        takePhotoBtn.textContent = 'Capture Photo';
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                camera.srcObject = stream;
            })
            .catch(err => {
                console.error("Error accessing camera: ", err);
            });
    }

    // Take photo
    function takePhoto() {
        context.drawImage(camera, 0, 0, photoCanvas.width, photoCanvas.height);
        const photoData = photoCanvas.toDataURL('image/png');
        addPhotoToGallery(photoData, 'Taken Photo');
        stopCamera();
    }

    // Stop camera
    function stopCamera() {
        camera.style.display = 'none';
        takePhotoBtn.textContent = 'Take Photo';
        const stream = camera.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        camera.srcObject = null;
    }

    // Add photo to gallery
    function addPhotoToGallery(src, description) {
        const photoDiv = document.createElement('div');
        photoDiv.className = 'photo';
        photoDiv.setAttribute('data-description', description);

        const img = document.createElement('img');
        img.src = src;
        img.alt = description;

        const descDiv = document.createElement('div');
        descDiv.className = 'description';
        descDiv.textContent = description;
        descDiv.addEventListener('click', function() {
            const newDescription = prompt("Enter new description:", description);
            if (newDescription !== null) {
                descDiv.textContent = newDescription;
                photoDiv.setAttribute('data-description', newDescription);
            }
        });

        photoDiv.appendChild(img);
        photoDiv.appendChild(descDiv);
        photoGallery.appendChild(photoDiv);
    }
});
