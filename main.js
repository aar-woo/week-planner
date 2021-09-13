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
  data[selectedDay].push(obj);
  console.log('data', data);
}
$ContainerModal.addEventListener('submit', submitData);

{ /* <tr>
  <td>11:00am</td>
  <td>wake up</td>
</tr> */ }

function createEvent(eventObj) {
  var tableRow = document.createElement('tr');
  var timeData = document.createElement('td');
  var descriptionData = document.createElement('td');
  timeData.textContent = event
  tableRow.setAttribute('data-view', )
  tableRow.setAttribute('id')
  var
}
