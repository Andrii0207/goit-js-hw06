const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const inputData = event.currentTarget.elements;

  if (inputData.email.value === '' || inputData.password.value === '') {
    alert('Please, fill in all fields the form!');
  }

  const formData = {
    email: inputData.email.value,
    password: inputData.password.value,
  };

  console.log(formData);

  //   const formData = new FormData(event.currentTarget);

  //   formData.forEach((value, name) => {
  //     console.log('onFormSubmit -> name', name);
  //     console.log('onFormSubmit -> value', value);
  //   });

  event.currentTarget.reset();
}
