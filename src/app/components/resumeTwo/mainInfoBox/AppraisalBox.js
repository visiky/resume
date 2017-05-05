import React from 'react';
import _ from 'lodash'


const AppraisalBox = (props) => {
    return ( 
        <div className = "appraisal-box">
            <div className="section-list-item">
            {
                props.appraisals.map((appraisal,index) => {
                    return <p key={appraisal+'-'+index} style={{ textIndent: '30px'}} className="section-list-item__content">{ appraisal }</p>
                })
            }
            </div>
        </div>
    )
}

export default AppraisalBox;