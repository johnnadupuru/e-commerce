import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cart:[]
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addCart:(state,action)=>{
            const newCart={counting:1,...action.payload}
            state.cart.push(newCart)
        },
        increaseCount:(state,action)=>{
            let index=state.cart.findIndex(list=>list.id===action.payload)
            state.cart[index].counting+=1
        },
        decreaseCount:(state,action)=>{
            let index=state.cart.findIndex(list=>list.id===action.payload)
            let count=state.cart[index].counting
            if(count>1){
                state.cart[index].counting-=1
            }
        },
        deleteCart:(state,action)=>{
            let index=state.cart.findIndex(list=>list.id===action.payload)
            state.cart.splice(index,1)
        }
    }
})

export const{addCart,increaseCount,decreaseCount,deleteCart}=cartSlice.actions
export default cartSlice.reducer