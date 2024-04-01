import { writable } from "svelte/store";
import sc from "../../data/sc.json";
import bf from "../../data/bf.json";
import tm from "../../data/tm.json";
import ex from "../../data/ex.json";


export function getSc(){
    return sc.sc1[0];
}  


export function getEx(){
    return ex.ex1[0];
}


export function getBf(){
    return bf.bf1[0];
}

export function getTm(){
    return tm.tm1[0];
} 

