var $ContainerModal = document.querySelector('.modal-container')
var $openModal = document.querySelector('.add-btn')
var $closeModal = document.querySelector('.submit-btn')

$openModal.addEventListener('click',showModal);
$closeModal.addEventListener('click', hideModal);


function showModal(event){
  $ContainerModal.setAttribute('class','modal-container overlay')
}

function closeModal(event) {
  $ContainerModal.setAttribute('class', 'modal-container overlay hidden')
}
