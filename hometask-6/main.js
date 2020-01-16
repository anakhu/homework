const restApi = setApi('http://localhost:3000', 'employees', makeRequest, RestAPI);
const ui = new UI(restApi);

const loadButton = document.getElementById('load-button');
loadButton.addEventListener('click', () => {
  ui.getEntries();
});

const form = document.getElementById('add-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = ui.getFormData();
  ui.addEntry(data);
});
