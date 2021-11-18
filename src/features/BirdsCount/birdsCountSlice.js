import { createSlice } from '@reduxjs/toolkit';

const initialState =
{
    Birds: [
        {
            name: 'robin',
            views: 1
        },
        {
            name: 'hen',
            views: 10
        },
    ]
}

export const birdsCountSlice = createSlice({
    name: 'birdsCount',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        addBird: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes

            console.log("Action Type")
            console.log(action.type)
            console.log("Action Payload")
            console.log(action.payload)

            state.Birds.push({ name: action.payload, views: 0 });

            //state.birdsCount.Birds.push({name:action,views:0})
            console.log("before append")

        },
        addView: (state, action) => {
            console.log(action)
            let bird = state.Birds.find(item => item.name === action.payload);
            bird.views += 1;
            console.log(bird.views)

        },
    },
});

export const { addBird, addView } = birdsCountSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectBirds = (state) => state.birdsCount.Birds;


export default birdsCountSlice.reducer;
