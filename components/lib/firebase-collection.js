import { collection } from 'firebase/firestore'
import { db } from './firebase'

export const authCollectionRef = collection(db,'auth')

// personal storage collection
export const personalStorageRef = collection(db,'personalStorages')

// all posts
export const posts = collection(db,'post')

// messages collection
export const conversationRef = collection(db,'messages')
export const conversationGroupRef = collection(db,'messages-group')

// content feeds collection 
export const contentFeedRef = collection(db,'content-feeds')

// payments collection
export const paymentsRef = collection(db,'payments')

