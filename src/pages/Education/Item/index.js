import React from 'react';
import './index.scss';

const EducationItem = ({date, title, company, children, logo, classNames = ''}) => {
    return (
        <div className={`education-item ${classNames}`}>
            <div className="education-item__experience">
                <div>
                    <div className="education-item__date">
                        {date}
                    </div>
                    <div className="education-item__company">
                        <p>
                            {title}
                        </p>
                        <h3>
                            {company}
                        </h3>
                    </div>
                </div>
                <img src={logo} alt=""/>
            </div>
            <p className="education-item__desc">
                {children}
            </p>
        </div>
    );
};

export default EducationItem;
