import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import SortEl from './SortFilter';

function DisplayList (){
  const groceryList = useSelector((state)=>state);
  const dispatch = useDispatch();
  const toggleComplete = (grocery)=>{
    return dispatch({
        type:"TOGGLE",
        name: grocery
    });
  };
  const increaseCount = (grocery)=>{
    return dispatch({
        type:"INCREMENT",
        name: grocery
    });
  };
  const decreaseCount = (grocery)=>{
    return dispatch({
        type:"DECREMENT",
        name: grocery
    });
  };
  const clearAll = ()=>{
    return dispatch({
      type:"CLEAR_ALL"
    });
  };

return (
    <>
    <h2>All grocery items</h2>
    {groceryList.length != 0 ? (
      <>
      <SortEl />
      <ul className='grocery-list'>
      {groceryList.map(el => {
          const {isCompleted, name, count, isVisible} = el;
          if(isVisible){
            return <>
            <li className='grocery-item' key={name}>
              <div className='title' style={{color: isCompleted?"red":"black"}} onClick={()=>{
                toggleComplete(el.name);
              }}>{el.name}</div>
              <div className='btn-container'>
                <button onClick={()=>{
                  increaseCount(el.name);
                }}> + </button>
                <div className='count-display'> {count} </div>
                <button onClick={()=>{
                  decreaseCount(el.name);
                }}> - </button>
              </div>
            </li>
            </>
          }
          return null;
          
      })}
      </ul>
      <button className='clear-btn' onClick={()=>{
        clearAll();
      }}>Clear All Items</button>
      </>
    ): <h4>You do not have any right now. Add some items to see !!</h4>}
    
    </>
);
}

export default DisplayList;