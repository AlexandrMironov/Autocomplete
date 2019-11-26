
export enum AutocompleteActionName {
    SET_VALUES = 'SET_VALUES',
    LOAD_DATA = 'LOAD_DATA',
}

export function setValues(values: string[])
    {
        return {
            type: AutocompleteActionName.SET_VALUES,
            values,
        };
    };

export function loadData(searchValue: string) {
    return {
        type: AutocompleteActionName.LOAD_DATA,
        searchValue,
    };
};

const initialValues = {
    values: []
}

export const autocomplete = (state = initialValues, action: any) => {
    switch(action.type) {
        case AutocompleteActionName.SET_VALUES:
            return {
                ...state,
                values: action.values,
            };
        default:
            return state;
    }
}
