import React from 'react'

const page = () => {
    const game = ["가위", "바위", "보"];
    const comSelect: string = game[Math.floor(Math.random() * 3)];



    return (
        <div>
            
            <button>가위</button>
            <button>바위</button>
            <button>보</button>
        </div>
    )
}

export default page
