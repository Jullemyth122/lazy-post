import Head from 'next/head'
import React, { useRef, useState } from 'react'
import Navbar from '../../components/navbar'
import { AuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { collection, doc, getDocs, onSnapshot, setDoc, updateDoc } from 'firebase/firestore'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { authentication, db,google, facebook, twitter, github } from '../../components/lib/firebase'

const Forgot = () => {

    const router = useRouter()

    const emailRef = useRef<HTMLInputElement>(null)
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    
    const [loading, setLoading] = useState(false)


    function handleSubmit(e:any) {
        e.preventDefault()
        
        setLoading(true)

        if (emailRef.current) {
            sendPasswordResetEmail(authentication,emailRef.current?.value)
            .then(res => {
                setMessage("")
                setError("")
                setMessage("Check your inbox for further instructions")
            })
            .catch(err => {
    
                setError("Email not register/found")
            })
            setLoading(false)
        }

    }


    return (
        <>
        <Head>
            <title> Authentication </title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar></Navbar>
        <div className='container-fluid'>
            <div className="auth-subfluid">
                <div className="auth-subcomponent">
                    <div className='auth-component'>
                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="login-header col-5">
                                <p>
                                    Forgot
                                </p>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>

                            <div className="input-form">
                                <div className="email-input">
                                    <input type="text" placeholder='Email'
                                        ref={emailRef}
                                    />
                                    <h6>
                                        {error.length > 0 ? error : message}      
                                    </h6>
                                </div>
                            </div>

                        
                            <button disabled={loading} className="fg-pass">
                                Reset Password
                            </button>
                            

                            <div className="button-form">
                                <h5 className="underline">
                                    Have an Account?
                                </h5>
                                <button className="fg-pass">
                                    <div className="circle"></div>
                                    <Link href="/auth">
                                        Login
                                    </Link>
                                </button>
                            </div>

                            
                        </form>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Forgot