import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import {Grid, Button, Tabs, Tab, Typography, Box, styled, createSvgIcon } from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

import cv from './cv-icon.png';
import LinkedIn from './linkedin.png';
import Facebook from './facebook.png';
import Resume from './resume.pdf'; 
import ImageTransition from './image-transition';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ResumeTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <Grid container>
        <Grid item xs={4} className="left">
          <ImageTransition />
        </Grid>
        <Grid item xs={1} className="center" />
        <Grid item xs={7} className="right">
          <h1>Tim Brown</h1>
          <span>
            Project Manager. Business Analyst.<br />
            Navy Veteran. Web Developer. Writer.
          </span>
          <br />
          <br />
          <span>
            Actively, seeking a new exciting Project Management position with a
            growing company.
          </span>
          <br /> <br />
          <ResumeTooltip title="Download My CV" placement="bottom-start">
            <a href={Resume} className="resume">
              <img src={cv} alt="resume" width="50" />
            </a>
          </ResumeTooltip>
          <ResumeTooltip title="Go to Linkedin" placement="bottom-start">
            <a
              href="https://www.linkedin.com/in/tim-brown-48926713/"
              className="social"
            >
              <img src={LinkedIn} alt="linkedin" width="50" />
            </a>
          </ResumeTooltip>
          <ResumeTooltip title="Go to Facebook" placement="bottom-start">
            <a href="https://www.facebook.com/timothy.allen.brown" className="social">
              <img src={Facebook} alt="facebook" width="47" />
            </a>
          </ResumeTooltip>
          <br />
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <h2>Accomplishments</h2>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Life" {...a11yProps(0)} />
              <Tab label="Work" {...a11yProps(1)} />
              <Tab label="Contribution" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <ul>
              <li>
                Traveled to the Middle East, South America, Africa, and the
                Carribean.
              </li>
              <li>
                Hiked up Hawaii's Stairway to Heaven and dived into Malta's
                Grotto
              </li>
              <li>Graduated from Illinois State University</li>
              <li>Honorably served in the US Navy</li>
            </ul>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ul>
              <li>
                While serving in the navy, was promoted 3 times in 4 years
              </li>
              <li>
                Awarded the Iraqi Expeditionary, Iraqi Freedom, Good Conduct,
                National Defense, and Global War on Terrorism Medals
              </li>
              <li>
                While at TransUnion, was instrumental in migrating petabytes of data off
                legacy systems
              </li>
              <li>Delivered electronic products to Fortune 500 clients</li>
            </ul>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <ul>
              <li>
                Volunteered at an HIV clinic, youth rehabilitation center, and
                local hospital
              </li>
              <li>
                Team Captain on a project with Rebuilding Together, a
                Chicago-based charity helping improve homes of under-privelaged
                residents
              </li>
              <li>Contributed to the Chicago Food Bank</li>
              <li>
                Member of Hegewisch Business Association and East Side Chamber
                of Commerce
              </li>
              <li>Member of Mission Hill Church</li>
            </ul>
          </TabPanel>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
