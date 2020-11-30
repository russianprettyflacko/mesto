const formInput = popupProfileEdit.querySelector('.profile-edit__field');
const formError = formInput.querySelector(`#${formInput.id}-error`);

nameInput.addEventListener('input', function (evt) {
  showInputError(evt, formInput, 'asd');
});

jobInput.addEventListener('input', function (evt) {

});

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
};