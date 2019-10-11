export const validateEmail = (value) => {
    if(!value) return `Email can't be blank`;
};

export const validateUrl = (value) => {
    const url = new RegExp(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/);
    if(!value) return `URL can't be blank`; 
    
    if(!url.test(value)) return 'Invalid url value';
};

export const validatePhone = (value) => {
    if(value.length > 0 && value.length !== 10) {
        return 'Incorrect number of digits';
    }
}