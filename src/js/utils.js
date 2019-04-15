const _errorMsgs = {
    valueMissing: `Input can't be blank.`,
    typeMismatch: `Invalid format.`
};

const _millisecondsConverter = {
    minutes: 60000,
    hours: 60000 * 60,
    days: 60000 * 60 * 24
};

const _convertTimeStringToMilliseconds = (timeValue, timeUnit) =>
    timeValue * _millisecondsConverter[timeUnit];

export const logger = (value, text = '[LOGGER]') => {
    console.log(text, value);
    return value;
};

export const formatReminderTimeIntoUTC = (timeValue, timeUnit) => {
    if (!timeValue) {
        return '';
    }
    return Date.now() + _convertTimeStringToMilliseconds(timeValue, timeUnit);
};

export const formatDataForAPI = ({
    name,
    url,
    tags,
    phone,
    timeValue,
    timeUnit
}) => ({
    name: name.value,
    url: url.value,
    tags: (tags.value && tags.value.trim().split(',')) || tags.value,
    phone: phone.value,
    reminder: formatReminderTimeIntoUTC(timeValue.value, timeUnit.value)
});

export const hasError = (input) => {
    let inputError = null;
    for (const type in input.validity) {
        if (type !== 'valid' && input.validity[type]) {
            inputError = input.validity[type];
            return {
                value: inputError,
                message: _errorMsgs[type]
            };
        }
    }
    return {
        value: inputError
    };
};
