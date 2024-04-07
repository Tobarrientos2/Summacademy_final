import { get, writable } from "svelte/store";
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



// Slugs


// This function takes a string as "core-ciencias" and returns "Core Ciencias"
export function _normalizeFirstSlug(txt_i:string){
    let txt_o = "";
    let splittedText_arr = txt_i.split("-");

    for ( let i = 0; i < splittedText_arr.length; i++){
        let word_txt = splittedText_arr[i];
        word_txt = word_txt.charAt(0)
        .toUpperCase() + word_txt.slice(1);
        if(i == splittedText_arr.length -1 ){
            txt_o += word_txt;
        } else{
            txt_o += word_txt + " ";

        } 
    } 
    return txt_o
} 

//This function takes a string as "resuemens/core-ciencias/ovidio" and returns "Core Ciencias"
//Usees _normalizeFirstSlug
export function _getFirstSlug(txt_i: string){
    let txt_o = ""
    let splittedText_arr = txt_i.split("/");
    txt_o = splittedText_arr[2];

    txt_o = _normalizeFirstSlug(txt_o);
    return txt_o
} 



//This function takes an array of objects and returns all the slugs of all the objects
 export function _extractSlugs(arr_i: Array<object>){
    let arr_o = [];
    for (let i = 0; i < arr_i.length; i++) {
        let obj = arr_i[i];
        let slug_txt = obj.v_slug;
        if(!arr_o.includes(slug_txt)){
            arr_o.push(slug_txt);
        } 
    }
    return arr_o
} 


//This function takes an array of objects and filters the slugs to return non-repeated slugs.
// Uses _extractSlugs and _getFirstSlug
export function filterSlugs(arr_i: Array<object>){
    let arr_p = _extractSlugs(arr_i);
    let arr_o:Array<string> = [];

    for(let i = 0; i < arr_p.length ; i++){
        let slug_txt: string = arr_p[i];
        let firstSlug =  _getFirstSlug(slug_txt);
        if(!arr_o.includes(firstSlug)){
            arr_o.push(firstSlug);
        } 
        
    }
    return arr_o
} 


// This function takes an array of objects and a string as "Core Ciencias" and returns all the objects with that first slug
export function getProductsBySlug(arr_obj_i: Array<object>, category_txt_i: string){
    
    let arr_o: Array<object> = [];
    for(let i = 0; i < arr_obj_i.length; i++){
        let obj = arr_obj_i[i];
        let slug = obj.v_slug;
        let firstSlug = _getFirstSlug(slug);
        if(firstSlug == category_txt_i){
            arr_o.push(obj);
        } 
    } 
    return arr_o
} 


// This function takes a string as "Core Etica" and returns "core-etica"
export function denormalizeSlug(txt_i:string): string{
    let txt_o = "";


    let lowerText_txt = txt_i.toLocaleLowerCase();
    let splittedText_arr = lowerText_txt.split(" ");
    
    txt_o = splittedText_arr.join("-");    
    return txt_o
} 





// Images

// This function get a random image from the array of benefits
export function getSomeBfImg():string{
    let txt_o = "";
    let arrayOfImages_arr = getBf();
    let arr_p = [];
    for(let i = 0; i < arrayOfImages_arr.arr.length; i++){
        let img_txt = arrayOfImages_arr.arr[i].v_img;
        arr_p.push(img_txt);

        
    }
    //Consigue un elemento random el array
    let randomIndex_num = Math.floor(Math.random() * arr_p.length);
    txt_o = arr_p[randomIndex_num];
    return txt_o
}  







// Price

export function filterByPrice(arr_obj_i){
    let arr_obj_o = [];
    let prices_arr_obj = _categorizeByPrice_arr_txt_o(arr);
    for (let i = 0; i < prices_arr_obj.length; i++){
        let price_txt = prices_arr_obj[i];
        let price_obj = {price: price_txt, arr: []};
        arr_obj_o.push(price_obj);

        for (let j = 0; j < arr_obj_i.length; j++){
            let obj = arr_obj_i[j];
            if(obj.v_txt_1 == price_txt){
                price_obj.arr.push(obj);
            } 
        } 
    }

    return arr_obj_o;
    
}