export interface AppState {
    formData: {
        name: string | undefined;
        url: string | undefined;
        tags?: string;
        description?: string;
        reminder?: number;
    },
    formError: boolean;
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
    formError: false,
    step: 1,
    links: []
};