import { configureStore, createSlice } from '@reduxjs/toolkit'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '@/components/lib/firebase'

const datas: any[] = []

export const accountSlice = createSlice({
    name:"account",
    initialState:{ value: datas },
    reducers:{
        initialAccounts: (state,action) => {
            if (action.payload == undefined) {
                state.value = []
            } else {
                state.value = action.payload
            }
        },
        createAccount: (state,action) => {
            let {
                ownerUid,
                authEmail,
                authUsername,
                status
            } = action.payload
            setDoc(doc(db,`auth`,`${ownerUid}`),{
                ownerUid:ownerUid,
                authEmail:authEmail,
                authUsername:authUsername,
                status:status,
                friends:[],
                posts:[],
                mutualFriends:[],
                likes:[],
                comments:[]

            },{merge:true})
            .then( res => {})
            .catch(err => {})
            state.value.push(action.payload)
        },
        deleteAccount: (state,action) => {
            state.value = state.value.filter(
                (user) => user.id !== action.payload.id
            )
        },
        updateStatus: (state,action) => {
            // state.value = state.value.filter()
        }

    }
})

export const {createAccount,deleteAccount,initialAccounts,updateStatus}  = accountSlice.actions;

export const store = configureStore({
    reducer: {
        account:accountSlice.reducer
    }
})