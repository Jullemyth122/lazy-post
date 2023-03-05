import React, { createContext, useContext, useEffect, useState } from 'react';
import { doc, DocumentData, onSnapshot, updateDoc } from 'firebase/firestore';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { authentication, db } from '../lib/firebase';
import { authCollectionRef } from '../lib/firebase-collection';

type AccountContextValue = {
    user: User | null;
    setOwner: React.Dispatch<React.SetStateAction<DocumentData | null>>;
    owner: DocumentData | null;
    handleLogout: (owner:any) => void;
};

const initialValue: AccountContextValue = {
    user: null,    
    setOwner: () => {},
    owner: null,
    handleLogout: (owner:any) => {}
};

const AccountContext = createContext<AccountContextValue>(initialValue);

export const useAccount = () => {
    const context = useContext(AccountContext);
    if (context === undefined) {
        throw new Error('useAccount must be used within an AccountProvider');
    }
    return context;
};

export const AccountProvider = ({ children }: { children: React.ReactNode }) => {

    const [messages,setMessages] = useState(null)
    const [person,setPerson] = useState(null)
    const [listUsers,setUsersList] = useState([])
    const [filterUsers,setFilterUsers] = useState(listUsers)

    const [owner, setOwner] = useState<DocumentData | null>(null);

    const useAuth = () => {
        const [currentUser, setCurrentUser] = useState<User | null>(null);
        useEffect(() => {
            const unsub = onAuthStateChanged(authentication, (user) => {
                setCurrentUser(user);
            });
            return unsub;
        }, []);
        return currentUser;
    };

    const user = useAuth();

    useEffect(() => {
        onSnapshot(authCollectionRef, (snapshot) => {
            snapshot.docs.map((it, ix) => {
                if (it.data().authEmail === user?.email) {
                    setOwner(it.data());
                }
            });
        });
    }, [user]);

    const handleLogout = (owner:any) => {
        updateDoc(doc(db,`auth`,`${owner.ownerUid}`),{
            status:"Offline"
        })
        signOut(authentication)
    }

    const value = {
        user,
        owner,
        setOwner,
        handleLogout
    };

    return <AccountContext.Provider value={value}>{children}</AccountContext.Provider>;
};
