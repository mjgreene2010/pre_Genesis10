var form = document.getElementById('contact-form');
var nameError = document.getElementById('nameError');
var emailError = document.getElementById('emailError');
var reasonError = document.getElementById('reasonError');
var addInfoError = document.getElementById('addInfoError');
var questionError = document.getElementById('questionError');

handleInputChange = e => {
  [
    e.target.document.getElementByName
  ] = e.target.document.getElementByName.value;
};

checkingForm = () => {
  form.addEventListener('submit', e => {
    var name = document.getElementById('contact-form').elements['name'].value;
    var email = document.getElementById('contact-form').elements['email'].value;
    var phone = document.getElementById('contact-form').elements['phone'].value;
    var reason = document.getElementById('contact-form').elements['reason']
      .value;
    var addInfo = document.getElementById('contact-form').elements['addInfo']
      .value;
    var question = document.getElementById('contact-form').elements['question']
      .value;

    console.log(name);
    console.log(email);

    let nameMessage = [];
    let emailMessage = [];
    let phoneMessage = [];
    let reasonMessage = [];
    let addInfoMessage = [];
    let questionMessage = [];

    if (name === '' || name === null || name === undefined) {
      nameMessage.push('Name is invalid');
    } else if (name !== '' || name !== null || name !== undefined) {
      nameMessage.push('Name is valid');
    }

    if (
      email === '' ||
      email === null ||
      email === undefined ||
      !email.includes('@')
    ) {
      emailMessage.push('Email is invalid');
    } else if (email !== '' || email !== null || email !== undefined) {
      emailMessage.push('Email is valid');
    }

    if (
      phone === '' ||
      phone === null ||
      phone === undefined ||
      typeof phone === 'number' ||
      phone.length != 10
    ) {
      phoneMessage.push('phone is invalid');
    } else if (phone !== '' || phone !== null || phone !== undefined) {
      phoneMessage.push('phone is valid');
    }

    if (reason === '' || reason === null || reason === undefined) {
      reasonMessage.push('Reason inquiry is invalid');
    } else if (reason !== '' || reason !== null || reason !== undefined) {
      reasonMessage.push('Reason inquiry is valid');
    }

    if (addInfo === '' || addInfo === null || addInfo === undefined) {
      addInfoMessage.push('Additional Info is invalid');
    } else if (addInfo !== '' || addInfo !== null || addInfo !== undefined) {
      addInfoMessage.push('Additional Info is valid');
    }

    if (question === '' || question === null || question === undefined) {
      questionMessage.push('Answer is invalid');
    } else if (question !== '' || question !== null || question !== undefined) {
      questionMessage.push('Answer is valid');
    }

    if (day === !day.checked) {
      dayMessage.push('Answer is invalid');
    } else {
      dayMessage.push('Answer is valid');
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

    if (reasonMessage.length > 0) {
      e.preventDefault();
      reasonError.innerText = reasonMessage.join(', ');
    }
    if (addInfoMessage.length > 0) {
      e.preventDefault();
      addInfoError.innerText = addInfoMessage.join(', ');
    }

    if (questionMessage.length > 0) {
      e.preventDefault();
      questionError.innerText = questionMessage.join(', ');
    }
  });
};
