function showImageModal(imageSrc, caption) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');

    modal.style.display = 'block';
    modalImage.src = imageSrc;
    modalCaption.innerText = caption;
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

function showSurprise() {
    alert('Surpresa! Te amo!');
}

alert ('SAIBA QUE TE AMO')
prompt ('diga me ama tambem')
alert ('EU TAMBEM TE AMO ')