interface GetMillisecByUnit {
    minute: number;
    hour: number;
    day: number;
};

export type TimeUnit = keyof GetMillisecByUnit;

const getMillisecByUnit: GetMillisecByUnit = {
    minute: 60000,
    hour: 60000 * 60,
    day: 60000 * 60 * 24
};

const convertToMilliseconds = (timeValue: number, timeUnit: TimeUnit) =>
    (timeValue * getMillisecByUnit[timeUnit]);

export const capitalize = (strValue: string) => {
    const strArray = strValue.split("");
    strArray[0] = strArray[0].toUpperCase();
    return strArray.join("");
};

export const toUtcTime = (timeValue: number, timeUnit: TimeUnit) => {
    if (!timeValue) return undefined;
    return Date.now() + convertToMilliseconds(timeValue, timeUnit);
};

