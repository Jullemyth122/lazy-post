import Link from 'next/link'
import React from 'react'

const Interaction = () => {
    return (
        <>
            <div className='inter-pt1'>
                <div className="creates">
                    <Link href={'/create/post'}>
                        Create Post...
                    </Link>
                    <Link href={'/create/community'}>
                        Create Community...
                    </Link>
                </div>
                <div className="engagements">

                </div>
            </div>
            <div className="terms-init">
                <div className="terms">
                    <div className="t1">
                        <h6> Term Of Policies </h6>
                        <h6> Contents of Policy </h6>
                        <h6> Users Policy </h6>
                        <h6> Moderator Policy </h6>
                    </div>
                    <div className="mid"></div>
                    <div className="l1">
                        <h6> English </h6>
                        <h6> Tagalog </h6>
                        <h6> French </h6>
                        <h6> British </h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Interaction