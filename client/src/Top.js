import React from 'react'
import { Link } from 'react-router-dom'

export const Top = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/otherpage">Other Page</Link>
        </>
    )
}