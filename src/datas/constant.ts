import { ResumeConfig } from '@/components/types';

export function getDefaultTitleNameMap({ i18n }): ResumeConfig['titleNameMap'] {
  return {
    /** 默认: 教育背景 */
    educationList: i18n.get('教育背景'),
    /** 默认: 工作经历 */
    workExpList: i18n.get('工作经历'),
    /** 默认: 项目经历 */
    projectList: i18n.get('项目经历'),
    /** 默认: 项目经历-项目描述 */
    projectDescribe: i18n.get('项目描述'),
    /** 默认: 项目经历-主要工作 */
    projectMainWork: i18n.get('主要工作'),
    /** 默认: 个人技能 */
    skillList: i18n.get('个人技能'),
    /** 默认: 更多信息 */
    awardList: i18n.get('更多信息'),
    /** 默认: 作品 */
    workList: i18n.get('个人作品'),
    /** 默认: 自我介绍 */
    aboutme: i18n.get('自我介绍'),
  };
}
