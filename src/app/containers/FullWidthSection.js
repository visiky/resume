import React,{Component} from 'react';
import { connect } from 'react-redux'
import { setVisibilityForm } from '../actions';

import LeftSection from './LeftSection';
import RightSection from './RightSection';

const FullWidthSection = ()=>{
  return (
    <div className="fullSection">
      <LeftSection />
      <RightSection />
    </div>  
  )
}



// const mapStateToProps = (state, ownProps) => {
//     return {
//       formSchema: state.formSchema
//     }
// }

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   setVisibilityForm: (index) => {
//     dispatch(setVisibilityForm(index))
//   }
// })

// const FullWidthSection = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(LeftSection)

export default FullWidthSection;