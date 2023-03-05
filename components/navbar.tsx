import Link from 'next/link'
import React from 'react'
import styles from '@/styles/navbar.module.scss'
import { useAccount } from '@/components/context/Account'
import { useRouter } from 'next/router'
import Navbar2 from './navbar2'
const Navbar = () => {

    const router = useRouter()
    const { owner,user,handleLogout } = useAccount()

    return (
        <>
            {user?.email && user.email.length > 0 ? 
                <>
                    <Navbar2></Navbar2>
                </> : 
                <div className={styles.navbar_component}>
                    <div className={styles.navbar_container}>
                        <div className="home-side">
                            <Link className={styles.links} href={'/home'}>
                                <h5 className={styles.markups}> Home </h5>
                            </Link>
                        </div>
                        <div className={styles.auth_side}>
                            <Link className={styles.links} href={'/dev'}>
                                <h5 className={styles.auth_markups}> Developer </h5>
                            </Link>
                            {/* {user?.email && user.email.length > 0 ? 
                            <>
                            <button className={styles.button_nav} onClick={e => handleLogout(owner)}>
                                <h5 className={styles.auth_markups}> 
                                    Logout
                                </h5>
                            </button>
        
                            </> : 
                            <>
                            </>} */}
                            <Link className={styles.links} href={'/auth'}>
                                <h5 className={styles.auth_markups}> Sign Up </h5>
                            </Link>
                        </div>
                    </div>
                </div>   
            }
        </>
    )
}

export default Navbar