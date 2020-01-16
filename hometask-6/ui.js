/* eslint-disable no-param-reassign */

function UI(restApiInstance) {
  this.container = document.getElementById('container');
  this.message = document.getElementById('message');
  this.api = restApiInstance;
}

UI.prototype.getEntries = function getEntries() {
  this.container.textContent = '';
  this.message.textContent = '';

  const callback = this.api.get();
  callback(({ response, status }) => {
    if (status === 200) {
      response.forEach((item) => this.renderEntry(item));
    } else {
      this.message.textContent = 'Failed to fetch data!';
    }
  });
};

UI.prototype.getEntry = function getEntry(id) {
  const callback = this.api.getById(id);
  callback(({ response, status }) => {
    if (status === 200) {
      this.message.textContent = JSON.stringify(response);
    } else {
      this.message.textContent = 'Could\'t get the entry';
    }
  });
};


UI.prototype.addEntry = function addEntry(data) {
  const callback = this.api.post(data);
  callback(({ response, status }) => {
    if (status === 201) {
      this.renderEntry(response);
      this.message.textContent = 'The entry was added successfully!';
    } else {
      this.message.textContent = 'Couldn\'t add the entry!';
    }
  });
};


UI.prototype.updateEntry = function updateEntry(id, data, nameElement, surnameElement, emailElement) {
  const callback = this.api.update(id, data);
  callback(({ status }) => {
    if (status === 200) {
      nameElement.textContent = data.firstName;
      surnameElement.textContent = data.lastName;
      emailElement.textContent = data.email;
      this.message.textContent = 'The entry was updated!';
    } else {
      this.message.textContent = 'Couldn\'t update the entry!';
    }
  });
};


UI.prototype.deleteEntry = function deleteEntry(id) {
  const callback = this.api.delete(id);
  callback(({ status }) => {
    if (status === 200) {
      const entryElement = document.getElementById(id);
      entryElement.remove();
      this.message.textContent = 'The entry was deleted!';
    } else {
      this.message.textContent = 'Couldn\'t remove the entry!';
    }
  });
};

UI.prototype.renderEntry = function renderEntry(obj) {
  const entry = document.createElement('div');
  entry.setAttribute('id', obj.id);

  const name = document.createElement('a');
  name.setAttribute('href', '#');
  name.textContent = obj.firstName;

  const surname = document.createElement('p');
  surname.textContent = obj.lastName;

  const email = document.createElement('p');
  email.textContent = obj.email;

  name.addEventListener('click', () => {
    this.getEntry(obj.id);
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';

  deleteButton.addEventListener('click', () => {
    this.deleteEntry(obj.id);
  });

  const updateButton = document.createElement('button');
  updateButton.textContent = 'Update';

  updateButton.addEventListener('click', () => {
    const data = this.getFormData();

    if (this.isValidInput(data)) {
      this.updateEntry(obj.id, data, name, surname, email);
    } else {
      this.message.textContent = 'Fields mustn\'t be empty!';
    }
  });

  entry.appendChild(name);
  entry.appendChild(surname);
  entry.appendChild(email);
  entry.appendChild(deleteButton);
  entry.appendChild(updateButton);

  this.container.appendChild(entry);
};


UI.prototype.isValidInput = function isValidInput(data) {
  return data.firstName && data.lastName && data.email;
};


UI.prototype.getFormData = function getFormData() {
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;

  const data = {
    firstName,
    lastName,
    email,
  };

  return data;
};
