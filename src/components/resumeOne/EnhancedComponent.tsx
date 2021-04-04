import React, { Component, PropTypes } from 'react';

function EnhancedComponent(WrappedComponent){
	return class extends Component{

        
		constructor(props){
			super(props);
			this.customStyle = {
				sectionHeader: '',
				sectionHeaderTitle: '',
				sectionHeaderSubTitle: ''
			};
		}
		render(){
			const id = this.props.id, title = this.props.title, subtitle = this.props.subtitle;
			const passProps = _.omit(this.props,'id','title','subtitle');
			return (
				<section id = {id} > 
					<div className = "section-header" > 
						<h2 className = "section-header_title" > {title} </h2> 
						<h4 className = "section-header_subtitle" > {subtitle} </h4> 
					</div> 
					<div className = "section-body" >
							<WrappedComponent {...passProps} />
					</div> 
				</section>
			);
		}
	};
}

export default EnhancedComponent;