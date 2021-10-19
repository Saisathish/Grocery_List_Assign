import {createStore} from 'redux';

const initialState = [];
// const initialStateMap = new Map();

function listReducer(currentState = initialState, action){
    switch(action.type){
        case "ADD_GROCERY": {
            // currentState.set(action.name,{name: action.name, count:1, isCompleted:false, isVisible:true});
            // return currentState;
            return [...currentState,{name: action.name, count:1, isCompleted:false, isVisible:true}];
        };
        case "TOGGLE":{
            return currentState.map((el)=>{
                if(el.name === action.name){
                    return {...el, isCompleted:!el.isCompleted};
                }
                return el;
            })
            // if(currentState.has(action.name)){
            //     var itemData = currentState.get(action.name);
            //     itemData.isCompleted = !itemData.isCompleted;
            // }
        };
        case "INCREMENT":{
            return currentState.map((el)=>{
                if(el.name === action.name){
                    return {...el, count: el.count + 1};
                }
                return el;
            })
        };
        case "DECREMENT":{
            return currentState.map((el)=>{
                if(el.name === action.name){
                    if(el.count > 1){
                        return {...el, count: el.count - 1};
                    }
                    
                }
                return el;
            })
        };
        case "SEARCH":{
            if(action.search === ""){
                return currentState.map((el)=>{
                    return {...el,isVisible:true};
                });
            }else{
                return currentState.map((el)=>{
                    if(!el.name.toLowerCase().includes(action.search.toLowerCase())){
                        return {...el, isVisible: false};
                    }
                    return el;
                })
            }
            
            // const filteredList = currentState.filter((grocery)=>{
            //     if(action.search === "") return grocery;
            //     return grocery.name.toLowerCase().includes(action.search.toLowerCase());
            // });
            // return filteredList;
        };
        case "SORT_BY_NAME":{
            const tempState = [].concat(currentState).sort((i,j)=>{
                if(i["name"]<j["name"]) return -1;
                if(i["name"]>j["name"]) return 1;
                return 0;
                });
            console.log(tempState);
            return tempState;
        };
        case "SORT_BY_QUANT":{
            const tempState = [].concat(currentState).sort((i,j)=>{
                if(i["count"]<j["count"]) return -1;
                if(i["count"]>j["count"]) return 1;
                return 0;
                });
            console.log(tempState);
            return tempState;
        };
        case "MARK_ALL_DONE": {
            return currentState.map((el)=>{
                return {...el,isCompleted:true};
            });
        };
        case "MARK_ALL_UNDONE": {
            return currentState.map((el)=>{
                return {...el,isCompleted:false};
            });
        };
        case "CLEAR_ALL": {
            return initialState ;
        }
        default : return currentState;
    }
}

const store = createStore(listReducer);
export { store };