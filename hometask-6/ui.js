/* eslint-disable no-case-declarations */
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


UI.prototype.updateEntry = function updateEntry(id, data) {
  if (this.isValidInput(data)) {
    const callback = this.api.update(id, data);
    callback(({ status }) => {
      if (status === 200) {
        const fieldsToUpdate = document.getElementById(id).children;
        fieldsToUpdate[0].textContent = data.firstName;
        fieldsToUpdate[1].textContent = data.lastName;
        fieldsToUpdate[2].textContent = data.email;
        this.message.textContent = 'The entry was updated!';
      } else {
        this.message.textContent = 'Couldn\'t update the entry!';
      }
    });
  } else {
    this.message.textContent = 'Fields mustn\'t be empty!';
  }
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

  divPattern(entry, obj);

  entry.addEventListener('click', (e) => {
    switch (e.target.id) {
    case 'btn-delete':
      this.deleteEntry(obj.id);
      break;
    case 'btn-update':
      const data = this.getFormData();
      this.updateEntry(obj.id, data);
      break;
    case 'fname':
      this.getEntry(obj.id);
      break;
    default:
      console.log('click =)');
    }
  });

  this.container.appendChild(entry);
};


UI.prototype.isValidInput = function isValidInput(data) {
  return data.firstName && data.lastName && data.email;
};


UI.prototype.getFormData = function getFormData() {
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;

  return { firstName, lastName, email };
};

function divPattern(elem, obj) {
  elem.insertAdjacentHTML('beforeend', `<a href='#' id='fname'>${obj.firstName}</a>`);
  elem.insertAdjacentHTML('beforeend', `<p id='fname'>${obj.lastName}</p>`);
  elem.insertAdjacentHTML('beforeend', `<p id='email'>${obj.email}</p>`);
  elem.insertAdjacentHTML('beforeend', '<button id=\'btn-delete\'>Delete</button>');
  elem.insertAdjacentHTML('beforeend', '<button id=\'btn-update\'>Update</button>');
}
