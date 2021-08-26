const cancel = document.getElementById('cancel');
const modal = document.getElementById('modal-container');

cancel.addEventListener('click', (e) => {
 modal.classList.toggle('display-none');
})