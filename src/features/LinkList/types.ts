export enum LIST_STATES {
    LOADING = "LOADING",
    ERROR = "ERROR",
    EMPTY = "EMPTY",
    SUCCESS = "SUCCESS"
}

export type ListStateTypes = keyof typeof LIST_STATES;