import React,{useContext} from "react";
import FilterContext  from "../../context/FilterContext";
export default function SearchBar(){
   let {filter,setFilter}=useContext(FilterContext)         

    return(
        <div>
            <input type="text"
            placeholder="Search products"
            value={filter.search} 
            onChange={(e)=>{setFilter({...filter,search:e.target.value})}}
            />
        </div>
    );
}