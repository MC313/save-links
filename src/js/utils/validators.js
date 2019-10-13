const hasError = (errors, touched, fieldName) => {
  return touched[fieldName] && errors[fieldName];
};

const hasErrors = (formFields) => {
  formFields.forEach((field) => {
    console.log("field", field);
  });
};

const validateTitle = (value) => {
  if (!value) return `Title can't be blank`;
};

const validateUrl = (value) => {
  const url = new RegExp(
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
  );
  if (!value) return `URL can't be blank`;

  if (!url.test(value)) return "Invalid url value";
};

const validatePhone = (value) => {
  if (value.length !== 10) {
    return "Incorrect number of digits";
  }
};

export { validatePhone, validateTitle, validateUrl };
