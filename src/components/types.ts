/** 简历配置内容 */
export type ResumeConfig = {
  /** 头像 */
  avatar?: {
    src: string;
    hidden?: boolean;
  };

  /** 个人信息 */
  profile?: {
    name: string;
    mobile: string;
    email: string;
    github?: string;
  };

  /** 教育经历 */
  educationList: Array<{
    edu_time: [string | undefined, string | number];
    school: string;
    major?: string;
  }>;

  /** 工作经历 */
  workList: Array<{
    company_name: string;
    department_name: string;
    work_time?: [string | undefined, string | number];
    work_desc: string;
  }>;

  /** 项目经历 */
  projectList: Array<{
    /** 项目名称 */
    project_name: string;
    /** 担任角色 */
    project_role: string;
    /** 描述 */
    project_desc?: string;
  }>;

  /** 个人技能 */
  skillList?: Array<{
    /** 技能项 */
    skill_name?: string;
    /** 掌握程度 */
    skill_level?: number;
    /** 技能描述 */
    skill_desc?: string;
  }>;

  /** 荣誉奖项 */
  awardList?: Array<{
    award_info: string;
    award_time: string;
  }>;

  /** 自我介绍 */
  aboutme?: {
    aboutme_desc: string;
  };
};

/**
 * 主题配置，暂时只支持主题色
 */
export type ThemeConfig = {
  /** 主题色 */
  color: string;
  /** tag 标签色 */
  tagColor: string;
}