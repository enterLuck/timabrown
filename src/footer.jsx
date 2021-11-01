import { textAlign } from '@mui/system';
import React from 'react'

const Footer = () => {
    const styling = {
        color:"#fff",
        textAlign:"center"
    }
    return (
        <div className="footer">
            <h5 style={styling}> &#169;2021 Tim Brown. All Rights Reserved.</h5>
        </div>
    )
}

export default Footer;
