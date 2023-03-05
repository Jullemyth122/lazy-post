import React from 'react'
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { authentication } from '@/components/lib/firebase';
import { DocumentData, onSnapshot } from 'firebase/firestore';
import { authCollectionRef }  from '@/components/lib/firebase-collection'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
// import accountSlice from '@/pages/features/Authentication';
import { store } from '@/features/store';

const Session = () => {

    const [messages,setMessages] = useState(null)
    const [owner, setOwner] = useState<DocumentData | null>(null);
    const [person,setPerson] = useState(null)
    const [listUsers,setUsersList] = useState([])
    const [filterUsers,setFilterUsers] = useState(listUsers)
  
    const useAuth = () => {
      const [ currentUser, setCurrentUser ] = useState<User | null>(null);
      useEffect(() => {
        const unsub = onAuthStateChanged(authentication, user => {
          setCurrentUser(user)
        });
        return unsub;
      }, [])
      return currentUser;
    }
  
    const user = useAuth();
    
  
    useEffect(() => {
      onSnapshot(authCollectionRef, snapshot => {
        snapshot.docs.map((it,ix) => {
          if (it.data().authEmail == user?.email) {
            setOwner(it.data())
          }
        })
      })
    
    },[user])

    return (
        <div>Session</div>
    )
}

export default Session