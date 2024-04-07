import { createEventDispatcher } from "svelte";

export function byPrice(dispatch: (name: string, detail?: any) => void, num_i: number){
    dispatch('categoryChanged', {
        x: num_i
    })
} 