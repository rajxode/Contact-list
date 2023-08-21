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


export const addContactThunk = createAsyncThunk(
    'contact/createContact',
    async(args,thunkAPI) => {
        fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(
            args
        ),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        return args;
    }
)

export const deleteContactThunk = createAsyncThunk(
    'contact/deleteContact',
    async(args,thunkAPI) => {
        fetch(`https://jsonplaceholder.typicode.com/`, {
            method: 'DELETE',
        });
        return args;
    }
)


export const updateContactThunk = createAsyncThunk(
    'contact/updateContact',
    async(args,thunkAPI) => {
        fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(
            args
        ),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json());
        return args;
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
    },
    extraReducers:(builder) => {
        builder.addCase(contactThunk.fulfilled,(state,action) => {
            state.contactList = [...action.payload];
        })
        .addCase(addContactThunk.fulfilled,(state,action) => {
            state.contactList.push(action.payload);
            state.showAddContact=null;
        })
        .addCase(updateContactThunk.fulfilled,(state,action) => {
            const data = action.payload;
            const newList = state.contactList.filter((contact) => contact.id !== data.id);
            state.contactList = newList;
            state.contactList.push(data);
            state.showContact=null;
        })
        .addCase(deleteContactThunk.fulfilled,(state,action) => {
            const data = action.payload;
            const newList = state.contactList.filter((contact) => contact.id !== data.id);
            state.contactList = newList;
            state.showContact=null;
        })
    }
})

export const contactReducer = contactSlice.reducer;

export const { setShowContact, setShowAddContact, addNewContact, removeContact} = contactSlice.actions;

export const contactSelector = (state) => state.contactReducer;