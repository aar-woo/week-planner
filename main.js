/* global data */
/* exported data */
var objtemp = {}
var $ContainerModal = document.querySelector('.modal-container');
var $openModal = document.querySelector('.add-btn');
var $closeModal = document.querySelector('.submit-btn');
var $addData = document.querySelector('.add-data');
var $tbodyData = document.querySelector('.tbodyData')

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
  objtemp = {
    time: $addData.elements.selectedTime.value,
    description: $addData.elements.description.value
  };
  $tbodyData.appendChild(createEvent())
  var selectedDay = $addData.elements.days.value.toLowerCase();
  data[selectedDay].push(objtemp);
  console.log('data', data);
}
$ContainerModal.addEventListener('submit', submitData);

{ /* <tr>
  <td>11:00am</td>
  <td>wake up</td>
</tr> */ }

function createEvent() {
  var tableRow = document.createElement('tr');
  var timeData = document.createElement('td');
  var descriptionData = document.createElement('td');
  console.log("time",objtemp.time)
  console.log("obj", objtemp)
  timeData.innerText = objtemp.time
  descriptionData.innerText = objtemp.description

  tableRow.appendChild(timeData)
  tableRow.appendChild(descriptionData)
  objtemp = {}
  return tableRow;
}
