import { ResumeConfig } from './types';

/** 初始化常量 */
export const RESUME_INFO: ResumeConfig = {
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/15646325?v=4',
    hidden: false,
  },
  profile: {
    name: '廖晓娟 (新茗)',
    email: '736929286@qq.com',
    mobile: '15625057119',
    github: 'https://github.com/visiky',
  },
  educationList: [
    {
      edu_time: ['2021-07-08', '2021-08-10'],
      school: '华南理工大学',
      major: '网络工程',
    },
  ],
  awardList: [
    {
      award_info: '蚂蚁近卫军 优秀新人奖',
      award_time: '2018.8',
    },
  ],
  workList: [
    {
      company_name: '数沃信息科技有限公司',
      department_name: '',
      work_time: ['2017-03-08', '2017-05-10'],
      work_desc:
        '前端实习生。主要负责数据挖掘分析后的可视化结果展现。使用的技术栈为：vue + echarts',
    },
    {
      company_name: '蚂蚁金服',
      department_name: '数据中台-大数据部',
      work_time: ['2017-06-01', '2017-12-20'],
      work_desc: '前端实习生，参与多类数据产品的研发工作。',
    },
    {
      company_name: '蚂蚁集团',
      department_name: '数据中台-大数据部',
      work_time: ['2018-06-01', '2020-07-03'],
      work_desc:
        '大型 BI 数据分析产品的可视化模块负责人。日常也负责数据可视化的开源技术建设，AntV 团队成员。',
    },
  ],
  skillList: [
    {
      skill_name: 'HTML 和 CSS',
      skill_desc:
        '能使用合理的结构和样式编写兼容主流浏览器的页面 \n 熟悉已标准化的HTML5/CSS3新特性',
      skill_level: 80,
    },
    {
      skill_name: 'ECMAScript',
      skill_desc:
        '1. 熟练使用 ESNext 开发项目，代码编写遵守规范\n2. 熟悉异步编程，掌握常见的解决方案及原理\n3. 熟悉 TypeScript，可以灵活运用泛型等高级用法',
      skill_level: 90,
    },
    {
      skill_name: '数据可视化',
      skill_desc: '丰富的数据可视化工程实践以及开源经验',
      skill_level: 90,
    },
    {
      skill_name: '前端工程能力',
      skill_desc: '业务工程能力',
      skill_level: 80,
    },
  ],
  projectList: [
    {
      project_name: '数据作战室',
      project_role: '前端负责人',
      project_desc: `这是一款为高管服务的 xxx 产品，我是这个项目的主要前端开发负责人，主要工作是:
         (1) 从零到一 ...
         (2) 体验优化，.... 给高管更好的体验
         (3) ....`,
    },
    {
      project_name: 'DeepInsight',
      project_role: '核心开发者',
      project_desc: `这是一款大型 BI 数据分析的前端项目，我主要负责数据可视化分析模块的建设，主要工作是:
         (1) 可视化分析资产的建设...
         (2) 体验优化，....
         (3) 探索....`,
    },
    {
      project_name: '可视化开源项目 G2、G2Plot',
      project_role: '核心开发者',
      project_desc:
        '目前主要是 G2Plot 的核心负责人，日常也做做 AntV 系列产品相关工作：antv 官网、G、G2、G2Plot 以及周边一系列产品',
    },
  ],
  aboutme: `🔭 I’m currently working on a BI department in Ant Group
  🌱 I’m focus on data visualization and data analysis
  📚 https://www.zhihu.com/people/visiky`,
};
