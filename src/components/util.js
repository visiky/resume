import React from 'react';
import _ from 'lodash'

const BaseInfo = (props) => {
  function parse(info, index) {
    switch (info.type) {
      case 'phone':
        return <li className="primary-info-list-item primary-info-list-item_phone" key={index}>
          < i className="fa fa-phone-square"></i>&nbsp;{info.content}</li >;
        // break;
      case 'blog':
        return <li className="primary-info-list-item primary-info-list-item_blog" key={index}>
          <i className="fa fa-rss-square"></i><a href={info.content} target="_blank"/>
          &nbsp; {info.content}{((extra)=>{if(extra) return <span>{extra}</span>})(info.extra)}
        </li>; break;
         case 'email':
        return <li className="primary-info-list-item primary-info-list-item_email" key={index}>
          <i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;{info.content}
          
        </li>; 
        break; default:
         return ''; break; } } 
        return <section className="primary-info">
          < ul className="primary-info-list">
            {_
              .map(props.baseinfo.maininfo, function (info, index) {
                return <li key={index} className='primary-info-list-item'>
                  {info}
                </li>
              })
            }
          </ul>
          < ul className="primary-info-list primary-info-list_contact">
            {_.map(props.baseinfo.extrainfo, parse)}
          </ul>
        </section >
      }
 function Experience(props) {function parse(experience, index) {
          return <li className={'experience-list-item experience-list-item_' + experience.type}  key={index}>
            {((url) => {
              if (url) 
                return <img className='experience-list-item_img' src={url} alt='项目介绍'/>})(experience.imgUrl)
            }
            <div>
              < h3 className="experience-list-item_title">
                {experience.title}
              </h3>
              <div className="experience-list-item_detail">
                < p className="content">
                  {experience.description}
                </p>
                {((link) => {
                  if (link) 
                    return <footer className="ref">
                      < a href={link} target='_blank'>
                        Demo
                      </a>
                    </footer >
                })(experience.refLink)}
              </div>
            </div>
          </li>
        }
        return ( < section id = 'experience' > <div className = "section-header" > < h2 className = "section-header_title" > {
          props.title
        } </h2> < h4 className = "section-header_subtitle" > {
    props.subtitle} </h4 > </div > <div className = "section-body" > < ul className = 'list' > {
          _.map(props.experiences, parse)
        } </ul> </div > </section>);
}

        const Skill = (props) => {function parse(skill, index) {
          return <li className={'skill-list-item skill-list-item_' + skill.type} key={index}>
            <
              h3
              className="skill-list-item_name"
              style={{
              width: skill.level
            }}>
              {skill.title
}
            </h3>
            <div className="skill-list-item_detail">
              < ul className="list content">
                {_
                  .map(skill.description, function (desc, index) {
                    return <li key={index}>
                      < i className="fa fa-check-circle-o"></i>{desc}</li >
                  })
}
              </ul>
            </div >
          </li>
        }
        return ( < section id = 'skill' > <div className = "section-header" > < h2 className = "section-header_title" > {
          props.title
        } </h2> < h4 className = "section-header_subtitle" > { props.subtitle} </h4 > </div ><div className = "section-body" > < ul className = 'skill-list--master' > {
          _.map(props.skills.master, parse)
        } </ul> < ul className = 'skill-list--practised' > {
    _.map(props.skills.practised, parse)
  } </ul > </div > </section>
);}
        const Appraisal = (props) => {return ( < section id = "appraisal" > <div className = "section-header" > < h2 className = "section-header_title" > 自我评价 </h2> </div > <div className = "section-body" > < p > {
          props.appraisal.content
        } </p> </div > </section>)
}
        export {Experience,
        Skill,
        BaseInfo,
        Appraisal
}