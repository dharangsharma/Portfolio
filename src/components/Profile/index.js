import React, { useContext } from 'react';
import './index.scss'
import TypedText from "../TypedText";
import SocialLinks from "../SocialLinks";
import Info from "../Info";
import Skills from "../Skills";
import {ThemeContext} from "../../context/ThemeContext";
import {useAnimation} from "../../use/animation";

const Profile = () => {
    const { backgroundImage, type } = useContext(ThemeContext);
    const { animation } = useAnimation();
    return (
        <div className="profile">
            <div className="profile__banner">
                <div className={`profile__photo ${animation}`} style={{backgroundImage: `url(${backgroundImage})`}} />
                <img src="https://i.ibb.co/nLx7ZkB/82830406-781926985641276-7129754047615074304-n.jpg" alt={type} />
            </div>
            <div className="profile__content">
                <div className="profile__title">
                    Dharang Sharma
                </div>
                <TypedText
                  dataText={
                      [
                          'Integration Engineer',
                          'Frontend Developer',
                          'Backend Developer',
                          
                      ]
                  }
                />
                <SocialLinks/>
                <Info icon="location">
                    New Delhi / INDIA
                </Info>
                <Skills />
            </div>
            <div className="profile__contact">
                <a href="https://drive.google.com/file/d/1rzAuF9qNB0ZqHMFamNG_b00bW2oKoAya/view?usp=sharing" target="_blank" rel="noreferrer">
                        <span>
                            Download CV
                        </span>
                </a>
                <a href="mailto:dharangsharma@yahoo.in">
                        <span>
                            Contact Me
                        </span>
                </a>
            </div>
        </div>
    );
};

export default Profile;
