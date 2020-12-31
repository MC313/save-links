export interface FormData extends Object {
    name: string;
    url: string;
    tags?: string;
    reminderUnit: string;
    reminderValue: number;
    description?: string;
};

export interface FormPayload extends Object, Pick<FormData, "name" | "url" | "description"> {
    reminder: number | undefined;
    tags: [] | string[];
};