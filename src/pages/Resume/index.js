import React from 'react';
import moment from 'moment';
import Title from "../common/Title";
import './index.scss';
import ResumeItem from "./Item";

const Resume = () => {
    return (
        <div className="page" id="resume">
            <Title icon={'fa fa-briefcase'}>
                Resume - Total Commercial Experience {moment().diff('07/10/2019', 'years', true).toFixed(2)} years
            </Title>
            <ResumeItem
                date={'Nov 2019 - Present'}
                title={'Integration Engineer'}
                company={'Ericsson'}
                logo={'https://www.ericsson.com/4915cd/assets/global/qbank/2018/02/14/e-con-vertical-1500x1500px-88604crop105012731273resize750750autoorientquality90stripbackground23ffffffextensionjpg.jpg'}
            >
                • Work on front-end with extensive use of Angular, React and native JavaScript for developing SPA. <br/>
                • Develop CSS with SCSS and BEM from sketches.
            </ResumeItem>
            <ResumeItem
                date={'May 2018 – July 2018'}
                title={'Trainee'}
                company={'Cert-In'}
                logo={'https://uxdt.nic.in/wp-content/uploads/2020/06/Preview-21.png'}
            >
                • Develop clean, maintainable and highly interactive single page web applications using
                Javascript, Angular, React, HTML, SASS. <br/>
                • Responsible for design and development of the web pages from sketches.
            </ResumeItem>
        </div>
    );
};

export default Resume;
