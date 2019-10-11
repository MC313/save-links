export const capitalize = (strValue) => {
    const strArray = strValue.split('');
    strArray[0] = strArray[0].toUpperCase();
    return strArray.join('');
};

export const hasError = (errors, touched, fieldName) => {
    return touched[fieldName] && errors[fieldName] ? true : false;
}

export const pluralize = (number, text) => {
    return number === 1 ? text : `${text}s`;
};