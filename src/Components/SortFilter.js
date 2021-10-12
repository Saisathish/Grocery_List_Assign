import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
  
    useEffect(
      () => {
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);
        return () => {
          clearTimeout(handler);
        };
      },
      [value] 
    );
  
    return debouncedValue;
};

function SortSearch (props) {

    const dispatch = useDispatch();

    const [value, setValue] = useState("");

    function debounce(val, waitTime){
        let timeoutID;
        return function(...args){
            clearTimeout(timeoutID);
            const context=this;
            timeoutID = setTimeout(()=>{
                // fn.call(context,...args);
                // console.log(value);
                setValue(value);
                searchGrocery(value);
            },waitTime);
        };
    };

    const sortByName = ()=>{
        return dispatch({
            type: "SORT_BY_NAME"
        });
    };
    const sortByQuantity = ()=>{
        return dispatch({
            type: "SORT_BY_QUANT"
        });
    };
    const searchGrocery = (searchterm)=>{
        return dispatch({
            type: "SEARCH",
            search: searchterm
        });
    };

    return (
        <>
            <div className='filtersort-container'>
                <button className='additional-btn' onClick={()=>{
                    sortByName();
                }}>Sort by Name</button>
                <button className='additional-btn' onClick={()=>{
                    sortByQuantity();
                }}>Sort by Quantity</button>
                    <input className='search-bar' value={value} placeholder="Search grocery" onChange={(e)=>{
                        const {target:{value}} = e;
                        // useDebounce(value,1000);
                        // console.log(value);
                        setValue(value);
                        searchGrocery(value);
                    }} />
            </div>
        </>
    );
};

export default SortSearch;