import { ResumeConfig } from './types';

/** 初始化常量 */
export const RESUME_INFO: ResumeConfig = {
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/15646325?v=4',
    hidden: false,
  },
  profile: {
    name: '廖晓娟 (新茗)',
    email: '736xxxxx86@qq.com',
    mobile: '156xxxxxx19',
    github: 'https://github.com/visiky',
    zhihu: 'https://www.zhihu.com/people/visiky',
    workExpYear: '4 年',
  },
  educationList: [
    {
      edu_time: ['2014.09.01', '2018.06.30'],
      school: '华南理工大学',
      major: '网络工程',
      academic_degree: '本科',
    },
  ],
  awardList: [
    {
      award_info: '英语 CET6',
      award_time: '2015',
    },
    {
      award_info: '蚂蚁近卫军 卓越个人奖',
      award_time: '2018.09',
    },
    {
      award_info: '前端练习生 可视化讲师',
      award_time: '2020.10',
    },
  ],
  workExpList: [
    {
      company_name: '数沃信息科技有限公司',
      department_name: '',
      work_time: ['2017.03', '2017.05'],
      work_desc:
        '前端实习生，主要负责数据挖掘分析后的可视化结果展现。使用的技术栈为：vue + echarts',
    },
    {
      company_name: '蚂蚁金服',
      department_name: '大数据部',
      work_time: ['2017.06', '2017.12'],
      work_desc: '前端实习生，参与多类数据产品的研发工作。',
    },
    {
      company_name: '蚂蚁集团',
      department_name: '体验技术部',
      work_time: ['2018.06', null],
      work_desc:
        '负责过高管数据作战室、敏捷 BI 产品的可视分析模块，日常也负责数据可视化的开源技术建设（AntV 团队成员）',
    },
  ],
  skillList: [
    {
      skill_name: 'HTML 和 CSS',
      skill_desc:
        '熟练掌握 html, css 等前端基础技术，不借助框架编写响应式/移动端网页',
      skill_level: 89,
    },
    {
      skill_name: 'ECMAScript',
      skill_desc:
        '熟悉 TypeScript，丰富的 ts 项目经验',
      skill_level: 90,
    },
    {
      skill_name: '数据可视化',
      skill_desc: '丰富的可视化工程实践以及开源经验',
      skill_level: 90,
    },
    {
      skill_name: '前端工程化',
      skill_desc: '组件库开发经验和架构工程小组成员',
      skill_level: 80,
    },
  ],
  projectList: [
    {
      project_name: '数据作战室',
      project_role: '前端负责人',
      project_desc: '面向总裁和高管以及决策 BI 的数字化经营决策和管理协同产品。提供一站式的数据化经营决策和管理协同功能，让高管高效获取决策信息，并提升管理效率。',
      project_content: '1. 项目从0到1的框架设计和开发 2. 产品体验精雕细琢的打磨 3. 建立稳定性保障机制'
    },
    {
      project_name: 'DeepInsight',
      project_role: '可视分析负责人',
      project_desc: 'DeepInsight 是蚂蚁集团自主研发的自助式 BI 数据洞察分析平台，面向企业分析人员、业务人员和开发人员，帮助蚂蚁集团实现精细化运营。',
      project_content: '负责可视化模块的产品建设和落地，对数据可视化分析以及商业智能领域有较丰富的经验；在可视化搭建方面也有所经验。同时除了业务产品的图表库建设之外，也参与蚂蚁 AntV 数据可视化的建设，赋能整个蚂蚁和阿里集团统计可视化分析相关业务。'
    },
    {
      project_name: 'G2、G2Plot',
      project_role: '核心开发者',
      project_desc: 'G2 是基于图形语法理论的可视化渲染引擎，G2Plot 是在 G2 基础上封装的开箱即用的统计可视化图表库',
      project_content: '目前主要是 G2Plot 的核心负责人，日常也做做 AntV 系列产品相关工作：antv 官网、G、G2、G2Plot 以及周边一系列产品',
    },
  ],
  workList: [
    {
      work_name: '个人简历生成器',
      visit_link: 'https://visiky.github.io/resume',
    },
    {
      work_name: 'AntV 主题生成器',
      visit_link: 'https://theme-set.antv.vision',
    },
    {
      work_name: 'AntV 可视化精选',
      visit_link: 'https://vis-dashboard.antv.vision',
    },
  ],
  aboutme: {
    aboutme_desc: `🌱 I’m focus on data visualization and data analysis
    😈 能力项：沟通协调能力、执行力、代码洁癖`,
  },
};
