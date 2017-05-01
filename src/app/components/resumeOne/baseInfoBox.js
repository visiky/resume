import React from 'react';
import _ from 'lodash'

const BasicInfoBox = (props) => {
    
    let types = ["school", "apartment", "graduateTime", "phone", "blog", "email"]; 
    
    return  <section className="primary-info">
                <ul className="primary-info-list">
                   {
                    types.map( type =>{  
                        return (
                            <li className={"primary-info-list-item primary-info-list-item_"+type} key={"basic-info-"+type}>
                                <i className={"fa fa-"+type+"-square"}></i>&nbsp;
                                <span>{ props[type] }</span>
                            </li>
                        )
                    })
                   }
                </ul>
            </section>
}

export default BasicInfoBox;