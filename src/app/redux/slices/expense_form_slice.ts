import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


interface ExpenseForm {
    description: string|null;
    category: string|null;
    subCategory: string|null;
    paymentMode: string|null;
    amount: string|null;
    date: string|null;
}

const initialState: ExpenseForm = {
    description: "",
    category: "",
    subCategory: "",
    paymentMode: "",
    amount: "",
    date: ""
}



const expenseFormSlice=createSlice({
    name:"expenseForm",
    initialState,
    reducers:{
        setDescription:(state, action:PayloadAction<string>)=>{
            state.description=action.payload;
        }, 
        setCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload;
        },
        setSubCategory: (state, action: PayloadAction<string>) => {
            state.subCategory = action.payload;
        },
        setPaymentMode: (state, action: PayloadAction<string>) => {
            state.paymentMode = action.payload;
        },
        setAmount: (state, action: PayloadAction<string>) => {
            state.amount = action.payload;
        },
        setDate: (state, action: PayloadAction<string>) => {
            state.date = action.payload;
        },
        resetForm: () => initialState,
    }
})


export const isFormValid = (state: RootState) => {
    const { description, category, subCategory, paymentMode, amount, date } = state.expenseForm;
    return (
        description !== "" &&
        category !== "" &&
        subCategory !== "" &&
        paymentMode !== "" &&
        amount !== "" &&
        date !== ""
    );
};


export const {
    setDescription,
    setCategory,
    setSubCategory,
    setPaymentMode,
    setAmount,
    setDate,
    resetForm,
} = expenseFormSlice.actions;

export default expenseFormSlice.reducer;
