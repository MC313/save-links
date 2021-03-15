export const capitalize = (strValue: string) => {
    const strArray = strValue.split("");
    strArray[0] = strArray[0].toUpperCase();
    return strArray.join("");
};

export const logger = (data: any, text: string = "[LOGGER]: ") => {
    console.log(text, data);
    return data;
};

export const toUtcTime = (timeValue: number, timeUnit: TimeUnit) => {
    if (!timeValue) return undefined;
    return Date.now() + convertToMilliseconds(timeValue, timeUnit);
};

const getMillisecByUnit: GetMillisecByUnit = {
    minute: 60000,
    minutes: 60000,
    hour: 60000 * 60,
    hours: 60000 * 60,
    day: 60000 * 60 * 24,
    days: 60000 * 60 * 24
};

const convertToMilliseconds = (timeValue: number, timeUnit: TimeUnit) =>
    (timeValue * getMillisecByUnit[timeUnit]);

interface GetMillisecByUnit {
    minute: number;
    minutes: number;
    hour: number;
    hours: number;
    day: number;
    days: number;
};

export type TimeUnit = keyof GetMillisecByUnit;

