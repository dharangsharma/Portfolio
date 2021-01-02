import React from 'react';
import Title from "../common/Title";
import './index.scss';
import EducationItem from "./Item";

const Education = () => {
    return (
        <div className="page" id="education">
        <Title icon={'fa fa-university'}>
                Education
            </Title>
            <EducationItem
                date={'2015 – 2019'}
                title={'Amity University'}
                company={'India, Noida'}
                logo={'https://ccfis.net/render/School_amity.png'}
            >
                Bachelor's Degree in Computer Science Engineering
            </EducationItem>
            <EducationItem
                date={'2013 – 2015'}
                title={'Hansraj Model School'}
                company={'India, New Delhi'}
                logo={'https://www.schoolmykids.com/wp-content/uploads/2018/12/DAV-Public-School-Varanasi-Ramnagar.png'}
            >
                {/* Bachelor's Degree in Computer Science Engineering */}
            </EducationItem>
            <br/>
            <br/>
            <Title icon={'fa fa-university'}>
                Certification
            </Title>
            <EducationItem
                date={'Issued September 2020'}
                title={'VSkills'}
                // company={'India, Noida'}
                logo={'https://pbs.twimg.com/profile_images/1108962073302556679/Kf1IJylK.png'}
            >
                Bachelor's Degree in Computer Science Engineering
            </EducationItem>
            <EducationItem
                date={'Issued July 2020'}
                title={'Udemy'}
                //company={'India, New Delhi'}
                logo={'https://newcastlebeach.org/images/udemy-logo-6.png'}
            >
                {/* Bachelor's Degree in Computer Science Engineering */}
            </EducationItem>
            <EducationItem
                date={'Issued September 2020'}
                title={'VSkills'}
                // company={'India, Noida'}
                logo={'https://pbs.twimg.com/profile_images/1108962073302556679/Kf1IJylK.png'}
            >
                Bachelor's Degree in Computer Science Engineering
            </EducationItem>
            <EducationItem
                date={'Issued April 2019'}
                title={'AWS'}
                // company={'India, Noida'}
                logo={'https://interworks.com/wp-content/uploads/2017/09/aws_logo.png'}
            >
                Bachelor's Degree in Computer Science Engineering
            </EducationItem>
            <EducationItem
                date={'Issued April 2019'}
                title={'Udemy'}
                // company={'India, Noida'}
                logo={'https://newcastlebeach.org/images/udemy-logo-6.png'}
            >
                Bachelor's Degree in Computer Science Engineering
            </EducationItem>
            
        </div>
        
    );
};

export default Education;
