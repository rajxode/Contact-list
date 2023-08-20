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
            if(state.showAddContact){
                state.showAddContact = null;
            }
            state.showContact = action.payload;
        },
        setShowAddContact:(state,action) => {
            if(state.showContact){
                state.showContact = null;
            }
            state.showAddContact = !state.showAddContact;
        },
        addNewContact:(state,action) => {
            const data = action.payload;
            state.showAddContact = null;
            state.contactList.push(data);
        },
        removeContact:(state,action) => {
            state.showContact=null;
            const data = action.payload;
            const newList = state.contactList.filter((contact) => contact.id !== data.id);
            state.contactList = newList;
        }

    },
    extraReducers:(builder) => {
        builder.addCase(contactThunk.fulfilled,(state,action) => {
            state.contactList = [...action.payload];
        })
    }
})

export const contactReducer = contactSlice.reducer;

export const { setShowContact, setShowAddContact, addNewContact, removeContact} = contactSlice.actions;

export const contactSelector = (state) => state.contactReducer;