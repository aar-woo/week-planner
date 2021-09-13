/* exported data */

var data = {
  view: 'monday-view',
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: []
};

function handleStorage(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('weekly-data', dataJSON);
}
var previousDataJSON = localStorage.getItem('weekly-data');
if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}
window.addEventListener('beforeunload', handleStorage);
