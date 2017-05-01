import React from 'react';
import _ from 'lodash'

const ExperienceBox = (props) => {
    const {experienceType, experienceDescription, imgUrl, refLink} = {...props};
    return (
        <li className={'experience-list-item experience-list-item_' + experienceType}  key={'experience'+experienceType}>
            {
                ((url) => {
                    if (url) 
                    return <img className='experience-list-item_img' src={url} alt='项目介绍'/>}
                )(imgUrl)
            }
            <div>
                <h3 className="experience-list-item_title">
                    {experienceType}
                </h3>
                <div className="experience-list-item_detail">
                    <p className="content">
                        {experienceDescription}
                    </p>
                    {((link) => {
                        if (link) 
                            return <footer className="ref">
                        <a href={link} target='_blank'>Demo</a>
                        </footer>
                    })(refLink)}
                </div>
            </div>
        </li>
    )
}

export default ExperienceBox;