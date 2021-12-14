
export type AppType = "EXTENSION" | "MOBILE" | "WEB";

export enum FormStatus {
    Active = "ACTIVE",
    Inactive = "INACTIVE"
};

export interface AppState {
    appType?: AppType;
    formStatus: FormStatus;
    userId: string;
};

export const initialAppState: AppState = {
    appType: undefined,
    formStatus: FormStatus.Inactive,
    userId: ""
};