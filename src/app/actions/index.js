import { ActionTypes } from '../constants/actionTypes';


/**
 * actionCreator
 * @param {*} payload  
 * @return {object} action
 */

export const setBasicInfo = (basicInfo) => ({
	type: ActionTypes.SET_BASICINFO,
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

export const clearBasicInfo = (basicInfo) => ({
	type: ActionTypes.CLEAR_SET_BASICINFO,
	basicInfo
});

export const clearExperience = (experience) => ({
	type: ActionTypes.CLEAR_SET_EXPERIENCE,
	experiences
});

export const clearSkill = (skill) => ({
	type: ActionTypes.CLEAR_SET_SKILL,
	skills
});

export const clearAppraisal = (appraisal) => ({
	type: ActionTypes.CLEAR_SET_APPRAISAL,
	appraisals
});



export const setFormSchema = (index=0) => ({
	type: 'SET_FORM_SCHEMA',
	index
});