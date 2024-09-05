import Link from 'next/link'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {

    return (
        <div>
            <h1>타이틀</h1>
            <ul className='flex'>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/games"}>게임</Link></li>
            </ul>
            {children}
        </div>
    )
}

export default layout
