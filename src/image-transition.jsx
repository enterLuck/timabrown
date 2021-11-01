import React from 'react'
import {Grid, Button, Tabs, Tab, Typography, Box, styled, createSvgIcon } from '@mui/material';
import { useTimer } from 'react-timer-hook';
import mepic1 from './bg2.jpg';
import mepic2 from './me-pic.jpg';
import pic2 from './NDS.png';
import pic3 from './GWOT.png';
import pic4 from './NGC.png';
import pic5 from './OIF.png';

const rel = ["./me-pic.jpg","./me-pic2.jpeg"];

export default class ImageTransition extends React.Component {
    constructor(){
        super();
        this.img0=mepic1
        this.img1=pic2
        this.img2=pic3
        this.img3=pic4
        this.img4=pic5
    }
    componentDidMount(){
        
    }

    render() {
        return (
        <div container>
         <img src={this.img0} className="me0" width="100%" alt="_default" /> 
        </div>
        )
    }
}

// <Grid container>
// <Grid item  xs={12} md={6}>
// <img src={this.img1} className="me1" width="10%" alt="_default" />
// </Grid>
// <Grid item xs={12} md={6}>
//   <img src={this.img2} className="me2" width="10%" alt="_default" />
// </Grid>
// </Grid>  
// <Grid container>
// <Grid item  xs={12} md={6}>
//   <img src={this.img3} className="me3" width="10%" alt="_default" />
// </Grid>
// <Grid item  xs={12} md={6}>
//   <img src={this.img4} className="me4" width="10%" alt="_default" />
// </Grid>
// </Grid> 