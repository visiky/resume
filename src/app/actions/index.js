import { ActionTypes } from '../constants/actionTypes';


/**
 * actionCreator
 * @param {*} payload  
 * @return {object} action
 */

export const setStyleColor = (color) => ({
	type: 'SET_STYLE_COLOR',
	color
})

export const setBasicInfo = (basicInfo) => ({
	type: ActionTypes.SET_BASIC_INFO,
	basicInfo
});

export const setExperience = (experiences) => ({
	type: ActionTypes.SET_EXPERIENCE,
	experiences
});

export const setSkill = (skills) => ({
	type: ActionTypes.SET_SKILL,
	skills
});

export const setAppraisal = (appraisals) => ({
	type: ActionTypes.SET_APPRAISAL,
	appraisals
});

// export const clearBasicInfo = (basicInfo) => ({
// 	type: ActionTypes.CLEAR_SET_BASIC_INFO,
// 	basicInfo
// });

export const deleteInfo = (payload) => ({
	type: 'DELETE_INFO',
	payload
});

// export const clearAppraisal = (appraisal) => ({
// 	type: ActionTypes.CLEAR_SET_APPRAISAL,
// 	appraisals
// });

/**
 * @params {object} - 要进行调整的信息
 */
export const adjustInfo = (payload) => ({
	type: 'ADJUST_INFO',
	payload
})


export const newSet = (actionType) =>{
	switch(actionType){
		case 'SET_SKILL':
			return {
				type: 'SET_NEW_SKILL',
				skills: {}
			};
		case 'SET_EXPERIENCE':
			return {
				type: 'SET_NEW_EXPERIENCE',
				experiences: {}
			};
		case 'SET_APPRAISAL':
			return {
				type: 'SET_NEW_APPRAISAL',
				appraisals: ""
			};
		default:
		break;
	}
}


export const clearSet = (payload) =>{
	const actionType = payload.actionType,
		content = payload.content;
	switch(actionType){
		case 'SET_BASIC_INFO':
			return {
				type: ActionTypes.SET_BASIC_INFO,
				basicInfo: content
			};
		break;
		case 'SET_SKILL':
			return {
				type: ActionTypes.SET_SKILL,
				skills: content
			};
		break;
		case 'SET_EXPERIENCE':
			return {
				type: ActionTypes.SET_EXPERIENCE,
				experiences: content
			};
		break;
		case 'SET_APPRAISAL':
			return {
				type: ActionTypes.SET_APPRAISAL,
				appraisals: content
			};
		break;
		default:
		break;
	}
}


export const setFormSchema = (index=0) => ({
	type: 'SET_FORM_SCHEMA',
	index
});