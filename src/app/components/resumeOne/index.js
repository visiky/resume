import React, { Component }from 'react';
import SkillBox from './skillBox';
import ExperienceBox from './experienceBox';
import BasicInfoBox from './baseInfoBox';
import AppraisalBox from './appraisalBox';
import PrintButton from '../printButton';

function Wrapper(props){
	return <section id = {props.id} > 
				<div className = "section-header" > 
					<h2 className = "section-header_title" > {props.title} </h2> 
					<h4 className = "section-header_subtitle" > {props.subtitle} </h4> 
				</div> 
				<div className = "section-body" >
						{ props.children }
				</div> 
			</section>
}


class ResumeOne extends Component {

	constructor(props){
		super(props);
	}

	render(){
		const { basicInfo, skills, appraisals, experiences } =this.props;
		return (
			<div className = 'main' >
				<header>
					<h1 className = "header-logo" >
						<span className = "header-logo_fullname" > {basicInfo.fullname} </span>
						<span className="header-logo_jobtitle">求职意向： {basicInfo.jobTitle } </span> 
					</h1> 
				</header> 
				<BasicInfoBox basicInfo = {basicInfo} /> 
				<Wrapper id="skill" title="技能" subtitle="">
					<ul className='skill-list--master'>
						{
							skills.map(skill => {
								<SkillBox  
								skill = { skill }/>
							})
						} 
					</ul> 	
				</Wrapper>
				<Wrapper id="experience" title="项目经验" subtitle="">
					<ul className = 'list'>
						{
							experiences.map(experience => {
								<ExperienceBox  
								experience = { experience }/>
							})
						} 
					</ul> 	
				</Wrapper>
				<AppraisalBox  
					appraisals = { appraisals } 
				/> 
				<PrintButton />
			</div>
		)
	}
}

export default ResumeOne;