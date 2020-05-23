export interface AppState {
    formData: {
        name: string | undefined;
        url: string | undefined;
        tags?: [];
        description?: string;
        reminder?: number;
    },
    step: number;
    links: string[] | [];
};

export const appState: AppState = {
    formData: {
        name: undefined,
        url: undefined,
        tags: undefined,
        description: undefined,
        reminder: undefined
    },
    step: 0,
    links: []
};