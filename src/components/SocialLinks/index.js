import React from 'react';
import './index.scss';

const SocialLinks = () => {
    return (
        <div className="social">
            <SocialLinks.Link
                url={'https://github.com/dharangsharma'}
                type={'github'}
            />
            <SocialLinks.Link
                url={'https://www.linkedin.com/in/dharangsharma/'}
                type={'linkedin'}
            />
            <SocialLinks.Link
                url={'https://www.facebook.com/guitarfreakdharang/'}
                type={'facebook'}
            />
            <SocialLinks.Link
                url={'https://www.instagram.com/dharang_sharma/'}
                type={'instagram'}
            />
        </div>
    );
};



SocialLinks.Link = ({url, type}) => <a href={url} target="_blank" rel="noreferrer" ><span className={`fab fa-${type}`} /></a>
;

export default SocialLinks;
