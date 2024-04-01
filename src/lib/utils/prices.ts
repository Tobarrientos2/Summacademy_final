export function _categorizeByPrice_arr_txt_o(arr_obj_i){
    let arr_txt_o = [];
    for (let i = 0; i < arr_obj_i.length; i++){
        let price_txt = arr_obj_i[i].v_txt_1;   
        if(arr_txt_o.includes(price_txt)){

        }else{
            arr_txt_o.push(price_txt);
        } 
    } 

    return arr_txt_o;
} 