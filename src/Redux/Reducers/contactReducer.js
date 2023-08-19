const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState = {contactList:[],
                    isLoading:false,
                    showContact:null,
                    showAddContact:null};


export const contactThunk = createAsyncThunk(
    'contact/fetchAPI',
    async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        return data;
    }
)


const contactSlice = createSlice({
    name:'ContactList',
    initialState,
    reducers:{
        setShowContact:(state,action) => {
            state.showContact = action.payload;
        },
        setShowAddContact:(state,action) => {
            if(state.showContact){
                state.showContact = null;
            }
            state.showAddContact = !state.showAddContact;
        }

    },
    extraReducers:(builder) => {
        builder.addCase(contactThunk.fulfilled,(state,action) => {
            state.contactList = [...action.payload];
        })
    }
})

export const contactReducer = contactSlice.reducer;

export const { setShowContact, setShowAddContact} = contactSlice.actions;

export const contactSelector = (state) => state.contactReducer;