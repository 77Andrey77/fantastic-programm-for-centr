const openModal = document.querySelector('.btn-open-modal');
const modalEl = document.querySelector('#modal-bgd');


openModal.addEventListener('click', function(event) {
    event.preventDefault();

    modalEl.classList.add('modal-active');
    
})
// закрыть модалку

const closeModal = document.querySelector('.modal-close-btn');

closeModal.addEventListener('click', function () {

    modalEl.classList.remove('modal-active');
    document.location.reload();
})

// очистить поля ввода
// const resetModal = document.querySelector('.reset-btn');

// resetModal.addEventListener('click', function () {
//     document.location.reload();
// })