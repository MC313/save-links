import { AppType } from "../store/state";

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
    return Date.now() + _convertToMilliseconds(timeValue, timeUnit);
};

export const getURL = async () => {
    const { url } = await _getCurrentTab();
    return url;
};

export const getUserId = (appType: AppType) => _getUserId(appType) || _setUserId(appType);

const _getMillisecByUnit: GetMillisecByUnit = {
    minute: 60000,
    minutes: 60000,
    hour: 60000 * 60,
    hours: 60000 * 60,
    day: 60000 * 60 * 24,
    days: 60000 * 60 * 24
};

const _convertToMilliseconds = (timeValue: number, timeUnit: TimeUnit) =>
    (timeValue * _getMillisecByUnit[timeUnit]);

const _getCurrentTab = async () => {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
};

const _getUserId = (appType: AppType): string | undefined => {
    type UserId = { userId: string | undefined };

    switch (appType) {
        case "EXTENSION":
            chrome.storage.local.get(["userId"], ({ userId }: UserId) => {
                return userId;
            });
        case "WEB":
            return sessionStorage.getItem("userId") || undefined;
        default:
            return undefined;
    }
};

const _setUserId = (appType: AppType) => {
    const userId = `GUEST_${Date.now()}`;
    switch (appType) {
        case "EXTENSION":
            chrome.storage.local.set({ userId }, () => userId);
        case "WEB":
            sessionStorage.setItem("userId", userId);
            return userId;
        default:
            return userId;
    }
};

interface GetMillisecByUnit {
    minute: number;
    minutes: number;
    hour: number;
    hours: number;
    day: number;
    days: number;
};

export type TimeUnit = keyof GetMillisecByUnit;

