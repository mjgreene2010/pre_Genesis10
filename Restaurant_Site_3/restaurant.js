var form = document.getElementById('contact-form');
var nameError = document.getElementById('nameError');
var emailError = document.getElementById('emailError');
var reasonError = document.getElementById('reasonError');
var addInfoError = document.getElementById('addInfoError');
var questionError = document.getElementById('questionError');
var dayError = document.getElementById('dayError');

checkingForm = e => {
  form.addEventListener('input', e => {
    var name1 = document.getElementsByName('name');
    var name = document.getElementById('contact-form').elements['name'].value;
    var email = document.getElementById('contact-form').elements['email'].value;
    var phone = document.getElementById('contact-form').elements['phone'].value;
    var addInfo = document.getElementById('contact-form').elements['addInfo']
      .value;

    let nameMessage = [];
    let emailMessage = [];
    let phoneMessage = [];
    let addInfoMessage = [];

    if (name === '' || name === null || name === undefined) {
      nameMessage.push('');
    } else if (name !== '' || name !== null || name !== undefined) {
      nameMessage.push('Valid');
    }

    if (
      email === '' ||
      email === null ||
      email === undefined ||
      !email.includes('@') ||
      !email.includes('.com' || 'edu')
    ) {
      emailMessage.push('');
    } else if (email !== '' || email !== null || email !== undefined) {
      emailMessage.push('Valid');
    }

    if (
      phone === '' ||
      phone === null ||
      phone === undefined ||
      phone.length != 10
    ) {
      phoneMessage.push('');
    } else if (phone !== '' || phone !== null || phone !== undefined) {
      phoneMessage.push('Valid');
    }

    if (addInfo === '' || addInfo === null || addInfo === undefined) {
      addInfoMessage.push('');
    } else if (addInfo !== '' || addInfo !== null || addInfo !== undefined) {
      addInfoMessage.push('Valid');
    }

    if (nameMessage.length > 0) {
      e.preventDefault();
      nameError.innerText = nameMessage.join(', ');
    }
    if (emailMessage.length > 0) {
      e.preventDefault();
      emailError.innerText = emailMessage.join(', ');
    }
    if (phoneMessage.length > 0) {
      e.preventDefault();
      phoneError.innerText = phoneMessage.join(', ');
    }

    if (addInfoMessage.length > 0) {
      e.preventDefault();
      addInfoError.innerText = addInfoMessage.join(', ');
    }
  });
};

checkingForm2 = e => {
  form.addEventListener('input', e => {
    var name1 = document.getElementsByName('name');
    var name = document.getElementById('contact-form').elements['name'].value;
    var email = document.getElementById('contact-form').elements['email'].value;
    var phone = document.getElementById('contact-form').elements['phone'].value;
    var addInfo = document.getElementById('contact-form').elements['addInfo']
      .value;

    let nameMessage = [];
    let emailMessage = [];
    let phoneMessage = [];
    let addInfoMessage = [];

    if (name === '' || name === null || name === undefined) {
      nameMessage.push('');
    } else if (name !== '' || name !== null || name !== undefined) {
      nameMessage.push('Valid');
    }

    if (
      email === '' ||
      email === null ||
      email === undefined ||
      !email.includes('@') ||
      !email.includes('.com' || 'edu')
    ) {
      emailMessage.push('');
    } else if (email !== '' || email !== null || email !== undefined) {
      emailMessage.push('Valid');
    }

    if (
      phone === '' ||
      phone === null ||
      phone === undefined ||
      phone.length != 10
    ) {
      phoneMessage.push('');
    } else if (phone !== '' || phone !== null || phone !== undefined) {
      phoneMessage.push('Valid');
    }

    if (addInfo === '' || addInfo === null || addInfo === undefined) {
      addInfoMessage.push('');
    } else if (addInfo !== '' || addInfo !== null || addInfo !== undefined) {
      addInfoMessage.push('Valid');
    }

    if (nameMessage.length > 0) {
      e.preventDefault();
      nameError.innerText = nameMessage.join(', ');
    }
    if (emailMessage.length > 0) {
      e.preventDefault();
      emailError.innerText = emailMessage.join(', ');
    }
    if (phoneMessage.length > 0) {
      e.preventDefault();
      phoneError.innerText = phoneMessage.join(', ');
    }

    if (addInfoMessage.length > 0) {
      e.preventDefault();
      addInfoError.innerText = addInfoMessage.join(', ');
    }
  });
};

checkingForm3 = () => {
  form.addEventListener('change', e => {
    var name1 = document.getElementsByName('name');

    var reason = document.getElementById('contact-form').elements['reason']
      .value;
    var question = document.getElementById('contact-form').elements['question']
      .value;
    var day = document.getElementById('contact-form').elements['day'];

    let reasonMessage = [];
    let questionMessage = [];
    let dayMessage = [];

    if (reason === '' || reason === null || reason === undefined) {
      reasonMessage.push('');
    } else if (reason !== '' || reason !== null || reason !== undefined) {
      reasonMessage.push('Valid');
    }

    if (question === '' || question === null || question === undefined) {
      questionMessage.push('');
    } else if (question !== '' || question !== null || question !== undefined) {
      questionMessage.push('Valid');
    }

    if (
      day[0].checked === false &&
      day[1].checked === false &&
      day[2].checked === false &&
      day[3].checked === false &&
      day[4].checked === false
    ) {
      dayMessage.push('');
    } else {
      dayMessage.push('Valid');
    }

    if (reasonMessage.length > 0) {
      e.preventDefault();
      reasonError.innerText = reasonMessage.join(', ');
    }
    if (questionMessage.length > 0) {
      e.preventDefault();
      questionError.innerText = questionMessage.join(', ');
    }
    if (dayMessage.length > 0) {
      e.preventDefault();
      dayError.innerText = dayMessage.join(', ');
    }
  });
};
