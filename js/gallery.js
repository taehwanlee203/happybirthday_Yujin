document.addEventListener('DOMContentLoaded', function() {
    const fileUpload = document.getElementById('file-upload');
    const addPresetPhotoBtn = document.getElementById('add-preset-photo-btn');
    const addUploadedPhotoBtn = document.getElementById('add-uploaded-photo-btn');
    const presetPhotos = document.getElementById('preset-photos');
    const photoGallery = document.getElementById('photo-gallery');
    const letterModal = document.getElementById('letter-modal');
    const closeBtn = document.querySelector('.close');
    const saveLetterBtn = document.getElementById('save-letter-btn');
    let currentPhotoDiv;

    addPresetPhotoBtn.addEventListener('click', function() {
        const selectedPhoto = presetPhotos.value;
        addPhotoToGallery(selectedPhoto, '작성자:');
    });

    addUploadedPhotoBtn.addEventListener('click', function() {
        const file = fileUpload.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                addPhotoToGallery(e.target.result, '작성자:');
            };
            reader.readAsDataURL(file);
        }
    });

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

        photoDiv.appendChild(img);
        photoDiv.appendChild(descDiv);
        photoGallery.appendChild(photoDiv);

        photoDiv.addEventListener('click', function() {
            currentPhotoDiv = photoDiv;
            letterModal.style.display = 'block';
        });
    }

    closeBtn.addEventListener('click', function() {
        letterModal.style.display = 'none';
    });

    saveLetterBtn.addEventListener('click', function() {
        const letterContent = document.getElementById('letter-content').value;
        const letterName = document.getElementById('letter-name').value;
        

        if (currentPhotoDiv) {
            currentPhotoDiv.setAttribute('data-description', `작성자: ${letterName}`);
            currentPhotoDiv.querySelector('.description').textContent = `작성자: ${letterName}`;
            letterModal.style.display = 'none';
        }
    });

    window.addEventListener('click', function(event) {
        if (event.target == letterModal) {
            letterModal.style.display = 'none';
        }
    });
});
