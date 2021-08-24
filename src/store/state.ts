
export type AppType = "EXTENSION" | "MOBILE" | "WEB";

export interface AppState {
    appType?: AppType;
    userId: string;
};

export const appState: AppState = {
    appType: undefined,
    userId: ""
};