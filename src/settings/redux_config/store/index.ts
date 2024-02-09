import {configureStore} from "@reduxjs/toolkit";
export function makeStore() {
    return configureStore({
        reducer: {
            //put here yours slices

        },
    })
}

export const store = makeStore()
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch