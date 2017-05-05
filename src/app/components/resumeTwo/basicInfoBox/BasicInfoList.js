import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { isString } from 'utils';

class BasicInfoList extends Component{

    constructor(props){
        super(props);

    }

    normalizeConnectUrl(url){
        let pattern1 = /(^(https:)?(\/\/)?www\.)/,
             pattern2 = /(^(http:)?(\/\/)?www\.)/;
        url = (pattern1.test(url) && url.replace(pattern1,"")) || 
                (pattern2.test(url) && url.replace(pattern2,"")) || url;
        return url;
    }
    render(){
        const props = this.props;
        const personalSkill = this.props.personalSkill ? this.props.personalSkill.split(",") : [];
        return(
            <div className = "basic-info-list">
                <div className="basic-info-list-item">
                    <div>
                        <img src="../images/profile.png" alt="" className="icon-lg"/>
                        <h1 className="title">个人介绍</h1>
                    </div>
                    <div className="content">
                        { props.profile1 && <p style={{ textIndent: "24px"}}>{ props.profile1 }</p> }
                        { props.profile2 && <p style={{ textIndent: "24px"}}>{ props.profile2 }</p> }
                        { props.profile3 && <p style={{ textIndent: "24px"}}>{ props.profile3 }</p> }
                    </div>
                </div>
                <div className="basic-info-list-item">
                    <div>
                        <img src="../images/contact.png" alt="" className="icon-lg"/>
                        <h1 className="title">联系方式</h1>
                    </div>
                    <div className="content">
                        <ul>
                            { this.props.phone && <li className="list-item-md">
                                <img src="/images/phone.png" alt=""/> { this.props.phone }
                            </li> }
                            { this.props.email && <li className="list-item-md">
                                <img src="/images/mail.png" alt=""/> { this.props.email }
                            </li> }
                            { this.props.qq && <li className="list-item-md">
                             <img src="../images/qq.png" alt="" width="22px" height="22px"/> { this.props.qq }
                            </li> }
                        </ul>
                    </div>
                </div>
                <div className="basic-info-list-item">
                    <div>
                        <img src="../images/personal-skill.png" alt="" className="icon-lg"/>
                        <h1 className="title">个人技能</h1>
                    </div>
                    <div className="content">
                        <ul>
                            { [].map.call(personalSkill,item =>{
                                return  item && isString(item) && <li className="list-item-md" key={"personal-skill-"+item}>
                                        <img src="/images/cute.png" alt=""/> {item} 
                                    </li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="basic-info-list-item">
                    <div>
                        <img src="images/connect.png" alt="" className="icon-lg"/>
                        <h1 className="title">其他联系</h1>
                    </div>
                    <div className="content">
                        <ul>
                            { this.props.twitter && <li className="list-item-md">
                                <img src="/images/twitter.png" alt=""/>{ this.normalizeConnectUrl(this.props.twitter) }
                            </li> }
                            { this.props.facebook && <li className="list-item-md">
                                <img src="/images/facebook.png" alt=""/>{ this.normalizeConnectUrl(this.props.facebook) }
                            </li> }
                            { this.props.github && <li className="list-item-md">
                                <img src="/images/github.png" alt=""/>{ this.normalizeConnectUrl(this.props.github) }
                            </li> }
                            { this.props.blog && <li className="list-item-md">
                                <img src="/images/blog.png" alt=""/>{ this.normalizeConnectUrl(this.props.blog) }
                            </li> }
                            { this.props.weibo && <li className="list-item-md">
                                <img src="/images/weibo.png" alt=""/>{ this.normalizeConnectUrl(this.props.weibo) }
                            </li> }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default BasicInfoList;