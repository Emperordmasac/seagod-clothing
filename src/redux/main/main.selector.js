import { createSelector } from 'reselect';

const selectMain = state => state.main;
 
export const selectMainBoxes = createSelector (
    [selectMain],
    main => main.boxes
);