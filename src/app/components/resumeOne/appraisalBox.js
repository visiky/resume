import React from 'react';
import _ from 'lodash'


const AppraisalBox = (props) => {
    return ( 
        <section id = "appraisal"> 
            <div className = "section-header" > 
                <h2 className = "section-header_title"> 自我评价 </h2>
            </div> 
            <div className = "section-body"> 
                { 
                    props.appraisals.map((appraisal,index) => {
                        return <p key={appraisal+'-'+index}>{ appraisal }</p>
                    })
                }
            </div> 
        </section>
    )
}

export default AppraisalBox;