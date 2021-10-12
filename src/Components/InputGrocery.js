import React, { useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';

function InputGrocery(props){

    const groceryList = useSelector((state)=>state);
    const dispatch = useDispatch();

    const [value, setValue] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(e);
    };

    function addGrocery(groceryName){
        if(groceryList){
            var ifExists = groceryList.some((item)=>{
                return item.name === groceryName;
            })
            if(ifExists){
                return {
                    type: "INCREMENT",
                    name: groceryName
                };
            }else{
                return {
                    type: "ADD_GROCERY",
                    name: groceryName
                };
            }
        }
        return {
            type: "ADD_GROCERY",
            name: groceryName
        };
    }

    return (
        <>
        <form className='grocery-form' onSubmit={handleSubmit}>
                <input type="text" className='grocery' value={value} onChange={(event)=>{
                    const {target:{value}} = event;
                    setValue(value);
                }} />
                <button className='submit-btn' onClick={()=>{
                    dispatch(addGrocery(value));
                    setValue("");
                }}>Add</button>
        </form>
        </>
        );
}

export default InputGrocery;