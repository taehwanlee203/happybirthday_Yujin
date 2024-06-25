 // Firestore에서 사진 데이터 불러오기
 async function loadPhotos() {
    const querySnapshot = await getDocs(collection(db, 'photos'));
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        addPhotoToGallery(doc.id, data.src, data.description, data.letter);
    });
}

document.addEventListener('DOMContentLoaded', async function() {
    const fileUpload = document.getElementById('file-upload');
    const photoGallery = document.getElementById('photo-gallery');
    const letterModal = document.getElementById('letter-modal');
    const closeBtn = document.querySelector('.close');
    const saveLetterBtn = document.getElementById('save-letter-btn');
    let currentPhotoDiv;
    let currentPhotoId;

    fileUpload.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const src = e.target.result;
                const description = '작성자:';
                addPhotoToServer(src, description);
            };
            reader.readAsDataURL(file);
        }
    });

    async function addPhotoToServer(src, description) {
        const docRef = await addDoc(collection(db, 'photos'), {
            src,
            description,
            letter: ''
        });
        addPhotoToGallery(docRef.id, src, description, '');
    }

    function addPhotoToGallery(id, src, description, letter) {
        const photoDiv = document.createElement('div');
        photoDiv.className = 'photo';
        photoDiv.setAttribute('data-id', id);
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
            currentPhotoId = id;
            document.getElementById('letter-content').value = letter;
            letterModal.style.display = 'block';
        });
    }

    closeBtn.addEventListener('click', function() {
        letterModal.style.display = 'none';
    });

    saveLetterBtn.addEventListener('click', async function() {
        const letterContent = document.getElementById('letter-content').value;
        if (currentPhotoDiv) {
            const description = currentPhotoDiv.getAttribute('data-description');
            const photoDoc = doc(db, 'photos', currentPhotoId);
            await updateDoc(photoDoc, {
                description,
                letter: letterContent
            });
            currentPhotoDiv.setAttribute('data-description', `작성자: ${letterContent}`);
            currentPhotoDiv.querySelector('.description').textContent = `작성자: ${letterContent}`;
            letterModal.style.display = 'none';
        }
    });

    window.addEventListener('click', function(event) {
        if (event.target == letterModal) {
            letterModal.style.display = 'none';
        }
    });

    await loadPhotos();
});