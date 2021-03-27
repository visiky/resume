import * as Actions from '../actions';


export const actionTypeMapProp = {
    SET_BASIC_INFO: 'basicInfo',
    SET_EXPERIENCE: 'experiences',
    SET_SKILL: 'skills',
    SET_APPRAISAL: 'appraisals'
};

export const actionTypeMapSetAction = {
    SET_BASIC_INFO: Actions['setBasicInfo'],
    SET_EXPERIENCE: Actions['setExperience'],
    SET_SKILL: Actions['setSkill'],
    SET_APPRAISAL: Actions['setAppraisal']
};

// export const actionTypeMapNewSetAction = {
//     SET_BASIC_INFO: Actions['newSetBasicInfo'],
//     SET_EXPERIENCE: Actions['newSetExperience'],
//     SET_SKILL: Actions['newSetSkill'],
//     SET_APPRAISAL: Actions['newSetAppraisal']
// }

// export const actionTypeMapClearAction = {
//     CLEAR_SET_BASIC_INFO: Actions['clearBasicInfo'],
//     CLEAR_SET_EXPERIENCE: Actions['clearExperience'],
//     CLEAR_SET_SKILL: Actions['clearSkill'],
//     CLEAR_SET_APPRAISAL: Actions['clearAppraisal']
// }

export const indexMapFormId = [
    'BASIC_INFO',
    'EXPERIENCE',
    'SKILL',
    'APPRAISAL'
];