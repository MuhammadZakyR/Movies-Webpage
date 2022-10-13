export const stateElement = (initialState) => {
    let state = initialState;
    const setState = (newState) => {
        return (state = newState);
    };
    return [state, setState];
};