export type stateProps = {
    theme: string
};

export enum themeActionTypes {
    CHANGE_THEME = 'CHANGE_THEME'
}

export type themeActionProps = {
    type: themeActionTypes
    payload: string
}