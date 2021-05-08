export interface FormData {
    url: string;
    tags?: string;
    reminderUnit?: string;
    reminderValue: number;
    description?: string;
};

export interface FormPayload extends Object, Pick<FormData, "url" | "description"> {
    reminder: number | undefined;
    tags: [] | string[];
};

export interface Notification {

}