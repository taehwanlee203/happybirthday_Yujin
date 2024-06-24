document.addEventListener('DOMContentLoaded', function() {
    const fileUpload = document.getElementById('file-upload');
    const takePhotoBtn = document.getElementById('take-photo-btn');
    const photoGallery = document.getElementById('photo-gallery');

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
            const currentDescription = photoDiv.getAttribute('data-description');
            const newDescription = prompt("Enter new description:", currentDescription);
            if (newDescription !== null) {
                descDiv.textContent = newDescription;
                photoDiv.setAttribute('data-description', newDescription);
            }
        });

        photoDiv.appendChild(img);
        photoDiv.appendChild(descDiv);
        photoGallery.appendChild(photoDiv);
    }

    // Handle editing existing photo descriptions
    photoGallery.addEventListener('click', function(event) {
        const target = event.target;
        if (target.classList.contains('description')) {
            const photoDiv = target.parentElement;
            const currentDescription = photoDiv.getAttribute('data-description');
            const newDescription = prompt("Enter new description:", currentDescription);
            if (newDescription !== null) {
                target.textContent = newDescription;
                photoDiv.setAttribute('data-description', newDescription);
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const fileUpload = document.getElementById('file-upload');
    const takePhotoBtn = document.getElementById('take-photo-btn');
    const photoGallery = document.getElementById('photo-gallery');

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
            const currentDescription = photoDiv.getAttribute('data-description');
            const newDescription = prompt("Enter new description:", currentDescription);
            if (newDescription !== null) {
                descDiv.textContent = newDescription;
                photoDiv.setAttribute('data-description', newDescription);
            }
        });

        photoDiv.appendChild(img);
        photoDiv.appendChild(descDiv);
        photoGallery.appendChild(photoDiv);
    }

    // Handle editing existing photo descriptions
    photoGallery.addEventListener('click', function(event) {
        const target = event.target;
        if (target.classList.contains('description')) {
            const photoDiv = target.parentElement;
            const currentDescription = photoDiv.getAttribute('data-description');
            const newDescription = prompt("Enter new description:", currentDescription);
            if (newDescription !== null) {
                target.textContent = newDescription;
                photoDiv.setAttribute('data-description', newDescription);
            }
        }
    });
});
