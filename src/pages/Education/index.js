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
                date={'2012 – 2016'}
                title={'Firat University'}
                company={'Turkey'}
                logo={'https://media-exp1.licdn.com/dms/image/C510BAQE3p1j1WWn1Fg/company-logo_100_100/0?e=1612396800&v=beta&t=TPDysSQsDB8h-UUybls55tpUvFfzxzUpSBW3wD1qqoM'}
            >
                Bachelor's Degree in Software Engineering
            </EducationItem>
        </div>
    );
};

export default Education;
