export const log = (value, text = '[LOG]: ') => {
    console.log(text, value);
    return value;
};