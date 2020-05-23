export const capitalize = (strValue: string) => {
    const strArray = strValue.split("");
    strArray[0] = strArray[0].toUpperCase();
    return strArray.join("");
};