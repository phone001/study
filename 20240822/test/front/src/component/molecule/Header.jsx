import React from 'react'
import { SHeader } from '../atoms/styleNodes/Styles'
import { Link } from 'react-router-dom';
import AuthHeader from '../molecule/AuthHeader'

const Header = () => {
    return (
        <SHeader>
            <AuthHeader />
        </SHeader>
    )
}

export default Header
