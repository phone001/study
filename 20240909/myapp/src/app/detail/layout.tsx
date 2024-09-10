import React, { ReactNode } from 'react'

function layout({ children }: { children: ReactNode }) {
    return (
        <>
            <div>헤더</div>
            <div>
                {children}
            </div>
            <div>푸터</div>
        </>
    )
}

export default layout
