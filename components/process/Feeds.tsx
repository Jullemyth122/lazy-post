import { onSnapshot } from 'firebase/firestore'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useAccount } from '../context/Account'
import { posts } from '../lib/firebase-collection'

const Feeds = () => {

    const { owner } = useAccount()

    const [feeds,SetFeeds] = useState<any[]>([])

    useEffect(() => {
        onSnapshot(posts, snapshot => {
            SetFeeds(snapshot.docs.map((it,ix) => {
                return {
                    id:it.id,
                    ...it.data()
                }
            }))
        })
    },[])
    // helper function to convert the string to HTML elements
    const convertToHtml = (str: string) => {
        return { __html: str }
    }

    return (
        <div className='feeds-pt1'>
            {feeds.map((elem,i) => {
                return (
                    <div key={i} className="feed-post">
                        <div className="head-post">
                            <div className="profile_side">
                                <Image src="/img/BETA2.png" alt="description" width={300} height={200} />
                                <div className="poster">
                                    <h6> {elem.ownerUid} </h6>
                                    <h6> 2.5k </h6>
                                </div>
                            </div>
                            <svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.42188 1.5C2.42188 1.73177 2.35315 1.95834 2.22438 2.15106C2.09561 2.34377 1.91259 2.49397 1.69846 2.58267C1.48433 2.67137 1.2487 2.69457 1.02138 2.64936C0.794058 2.60414 0.585249 2.49253 0.42136 2.32864C0.25747 2.16475 0.14586 1.95594 0.100643 1.72862C0.0554257 1.5013 0.0786328 1.26567 0.167329 1.05154C0.256026 0.837411 0.406228 0.654389 0.598942 0.525621C0.791656 0.396854 1.01823 0.328125 1.25 0.328125C1.5608 0.328125 1.85887 0.45159 2.07864 0.671359C2.29841 0.891128 2.42188 1.1892 2.42188 1.5ZM13.75 0.328125C13.5182 0.328125 13.2917 0.396854 13.0989 0.525621C12.9062 0.654389 12.756 0.837411 12.6673 1.05154C12.5786 1.26567 12.5554 1.5013 12.6006 1.72862C12.6459 1.95594 12.7575 2.16475 12.9214 2.32864C13.0852 2.49253 13.2941 2.60414 13.5214 2.64936C13.7487 2.69457 13.9843 2.67137 14.1985 2.58267C14.4126 2.49397 14.5956 2.34377 14.7244 2.15106C14.8531 1.95834 14.9219 1.73177 14.9219 1.5C14.9219 1.1892 14.7984 0.891128 14.5786 0.671359C14.3589 0.45159 14.0608 0.328125 13.75 0.328125ZM7.5 0.328125C7.26823 0.328125 7.04166 0.396854 6.84894 0.525621C6.65623 0.654389 6.50603 0.837411 6.41733 1.05154C6.32863 1.26567 6.30543 1.5013 6.35064 1.72862C6.39586 1.95594 6.50747 2.16475 6.67136 2.32864C6.83525 2.49253 7.04406 2.60414 7.27138 2.64936C7.4987 2.69457 7.73432 2.67137 7.94846 2.58267C8.16259 2.49397 8.34561 2.34377 8.47438 2.15106C8.60315 1.95834 8.67188 1.73177 8.67188 1.5C8.67188 1.1892 8.54841 0.891128 8.32864 0.671359C8.10887 0.45159 7.8108 0.328125 7.5 0.328125Z" fill="white"/>
                            </svg>
                        </div>
                        <div className="body_post">
                            <div className="title">
                                <h5>
                                    {elem.title}
                                </h5>
                            </div>
                            <div className="st_body">
                                {elem.content.map((elem:any,i:number) => {
                                    
                                    if (elem.type == 'code') {
                                        return (
                                            <code  key={i} dangerouslySetInnerHTML={convertToHtml(elem.value)} />
                                        )
                                    } else {
                                        return (
                                            <div key={i} dangerouslySetInnerHTML={convertToHtml(elem.value)} />
                                        )
                                    }

                                })}
                            </div>
                        </div>
                        <div className="check_post">

                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Feeds