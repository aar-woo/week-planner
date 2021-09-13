/* global data */
/* exported data */

var $ContainerModal = document.querySelector('.modal-container');
var $openModal = document.querySelector('.add-btn');
var $closeModal = document.querySelector('.submit-btn');
var $addData = document.querySelector('.add-data');

$openModal.addEventListener('click', showModal);
$closeModal.addEventListener('click', closeModal);

function showModal(event) {
  $ContainerModal.setAttribute('class', 'modal-container overlay');
}

function closeModal(event) {
  $ContainerModal.setAttribute('class', 'modal-container overlay hidden');
}

function submitData(event) {
  event.preventDefault();
  var obj = {
    time: $addData.elements.selectedTime.value,
    description: $addData.elements.description.value
  };
  var selectedDay = $addData.elements.days.value.toLowerCase();
  console.log('obj', obj);
  console.log('data.selectedDay', data[selectedDay]);
  data[selectedDay].push();
  data[selectedDay].push();

  console.log('data', data);
}
$ContainerModal.addEventListener('submit', submitData);
