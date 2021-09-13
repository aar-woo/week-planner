var $description = document.querySelector('#description');
var $dayValue = document.querySelector('#days');
var $timeValue = document.querySelector('#time');
var $ContainerModal = document.querySelector('.modal-container');
var $openModal = document.querySelector('.add-btn');
var $closeModal = document.querySelector('.submit-btn');

$openModal.addEventListener('click', showModal);
$closeModal.addEventListener('click', closeModal);

function showModal(event) {
  $ContainerModal.setAttribute('class', 'modal-container overlay');
}

function closeModal(event) {
  $ContainerModal.setAttribute('class', 'modal-container overlay hidden');
}

console.log($description, $dayValue, $timeValue);

$closeModal.addEventListener('submit');
