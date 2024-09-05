import { ReactNode } from 'react';
const layout = ({ children }: {
    children: ReactNode
}) => {
    return (
        <div>
            여기는 마이페이지의 레이아웃
            {children}
        </div>
    )
}

export default layout
