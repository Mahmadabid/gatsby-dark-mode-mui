export type stateProps = {
    theme: string
};

export enum actionTypes {
    CHANGE_THEME = 'CHANGE_THEME'
}

export type actionProps = {
    type: actionTypes
    payload: string
}