import type { ResumeConfig } from '@/components/types';

/** 初始化常量 */
export const RESUME_INFO: ResumeConfig = {
  avatar: {
    src: undefined,
    hidden: false,
  },
  profile: {
    name: '姓名',
    email: '736****86@qq.com',
    mobile: '156********',
    github: 'https://github.com/visiky',
    zhihu: 'https://zhihu.com/people/visiky',
    workExpYear: '',
    workPlace: '浙江杭州',
    positionTitle: '前端工程师',
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
    {
      award_info:
        '前端早早聊 分享 “如何构思和开发开箱即用的可视化图表库 G2Plot”',
      award_time: '2021.07',
    },
  ],
  workExpList: [
    {
      company_name: '蚂蚁集团',
      department_name: '体验技术部',
      work_time: ['2018.06', null],
      work_desc: `1. 担任蚂蚁高管决策和管理协同产品 “数据作战室” 的前端负责人\r\n2. 负责蚂蚁敏捷 BI 产品 “DeepInsight” 的可视分析模块产品能力建设\n3. 数据可视化 AntV 团队核心成员，负责 G2、G2Plot 开源技术的建设`,
    },
    {
      company_name: '蚂蚁金服',
      department_name: '大数据部',
      work_time: ['2017.06', '2017.12'],
      work_desc:
        '前端实习生。使用 React 参与开发多类产品：数据研发平台、数据决策平台、数据分析平台的研发工作，同时也参与大型 BI 产品的重构工作，有良好的编码习惯。',
    },
    {
      company_name: '数沃信息科技有限公司',
      department_name: '',
      work_time: ['2017.03', '2017.05'],
      work_desc:
        '前端实习生。使用 Vue 来实现平台功能和逻辑，再用 ECharts 来对数据挖掘分析后的可视化结果进行展示',
    },
  ],
  skillList: [
    {
      skill_name: 'HTML 和 CSS',
      // '熟练掌握 html, css 等前端基础技术，不借助框架编写响应式/移动端网页',
      skill_desc: '',
      skill_level: 89,
    },
    {
      skill_name: 'TypeScript / JavaScript',
      // skill_desc: '熟悉 TypeScript，丰富的 ts 项目经验',
      skill_level: 90,
    },
    {
      skill_name: '数据可视化',
      skill_desc: '丰富的可视化工程实践以及开源经验',
      skill_level: 90,
    },
    {
      skill_name: 'React / 前端工程化',
      skill_desc: '大型前端项目经验以及组件库开发经验',
      skill_level: 80,
    },
  ],
  projectList: [
    {
      project_name: '数据作战室',
      project_role: '前端负责人',
      project_time: '2019.04 - 2020.06',
      project_desc:
        '面向总裁和高管以及决策 BI 的数字化经营决策和管理协同产品。提供一站式的数据化经营决策和管理协同功能，让高管高效获取决策信息，并提升管理效率。',
      project_content:
        '1. 项目从0到1的框架设计和开发 2. 产品体验精雕细琢的打磨 3. 建立稳定性保障机制。目前仍在迭代中，帮助提升高管业务决策效率',
    },
    {
      project_name: 'DeepInsight',
      project_role: '可视分析负责人',
      project_time: '2018.07 - 2019.04 / 2020.07 - 至今',
      project_desc:
        'DeepInsight 是蚂蚁集团自主研发的自助式 BI 数据洞察分析平台，面向企业分析人员、业务人员和开发人员，帮助蚂蚁集团实现精细化运营。',
      project_content:
        'BI 平台工具核心部分是报表制作，也就是通过数据连接、可视化配置形成图表物料之后，通过拖拽方式进行页面编排，最终形成报表页面进行发布的过程。\n1. 主导开放能力建设，拉通产品、设计建设和扩展可视化图形，提升丰富度\n2. 产品体验优化，尤其是对 ECharts 的体验顽疾进行攻克\n3. 主导可视化能力建设：业务标准化图表库建设(通用组件设计和开发经验丰富)、促进数据分析能力增强等可视化一体化建设',
    },
    {
      project_name: 'G2、G2Plot',
      project_role: '核心开发者',
      project_time: '2019 - 至今',
      project_desc:
        'G2 是基于图形语法理论的可视化渲染引擎，G2Plot 是在 G2 基础上封装的开箱即用的统计可视化图表库',
      project_content:
        'AntV 可视化建设，赋能整个蚂蚁和阿里集团统计可视化分析相关业务。负责 AntV 系列: AntV 官网、G 渲染引擎、 G2、G2Plot、ThemeSet 主题构建器等开源项目的研发工作。',
    },
  ],
  workList: [
    // {
    //   work_name: '个人简历生成器',
    //   visit_link: 'https://visiky.github.io/resume',
    // },
    // {
    //   work_name: 'AntV 主题生成器',
    //   visit_link: 'https://theme-set.antv.vision',
    // },
    // {
    //   work_name: 'AntV 可视化精选',
    //   visit_link: 'https://vis-dashboard.antv.vision',
    // },
  ],
  aboutme: {
    aboutme_desc: `🌱 Focus on data visualization and analysis 😈 能力项：沟通协调能力、执行力
    自驱型前端工程师，三年多大型复杂产品开发经验，负责蚂蚁集团 BI 产品 DeepInsight 的可视化建设，参与了从图表库到 BI 产品力的一体化建设，对商业智能领域的数据可视化建设有较为丰富的经验。
    参与 AntV 团队开源项目 G2、G2Plot 的研发，目前是 G2Plot 的主要负责人。
    `,
  },
  // 国际化
  locales: {
    'en-US': {
      profile: {
        name: 'Xiaojuan Liao',
        email: '736****86@qq.com',
        mobile: '156********',
        github: 'https://github.com/visiky',
        zhihu: 'https://zhihu.com/people/visiky',
        workExpYear: '',
      },
      skillList: [
        { skill_name: 'HTML 和 CSS', skill_desc: '', skill_level: 89 },
        { skill_name: 'TypeScript / JavaScript', skill_level: 90 },
        {
          skill_name: 'Data Visualization',
          skill_desc: '丰富的可视化工程实践以及开源经验',
          skill_level: 90,
        },
        {
          skill_name: 'React / 前端工程化',
          skill_desc: '大型前端项目经验以及组件库开发经验',
          skill_level: 80,
        },
      ],
      avatar: { hidden: false },
      educationList: [
        {
          edu_time: ['2014.09.01', '2018.06.30'],
          school: 'SCUT',
          major: 'Compute Science',
          academic_degree: '本科',
        },
      ],
      awardList: [
        { award_info: '英语 CET6', award_time: '2015' },
        { award_info: '蚂蚁近卫军 卓越个人奖', award_time: '2018.09' },
        { award_info: '前端练习生 可视化讲师', award_time: '2020.10' },
        {
          award_info:
            '前端早早聊 分享 “如何构思和开发开箱即用的可视化图表库 G2Plot”',
          award_time: '2021.07',
        },
      ],
      workExpList: [
        {
          company_name: 'Ant Group',
          department_name: 'AFX',
          work_time: ['2018.06', null],
          work_desc:
            '1. 担任蚂蚁高管决策和管理协同产品 “数据作战室” 的前端负责人\r\n2. 负责蚂蚁敏捷 BI 产品 “DeepInsight” 的可视分析模块产品能力建设\n3. 数据可视化 AntV 团队核心成员，负责 G2、G2Plot 开源技术的建设',
        },
        {
          company_name: 'Ant Group',
          department_name: '大数据部',
          work_time: ['2017.06', '2017.12'],
          work_desc:
            '前端实习生。使用 React 参与开发多类产品：数据研发平台、数据决策平台、数据分析平台的研发工作，同时也参与大型 BI 产品的重构工作，有良好的编码习惯。',
        },
      ],
      projectList: [
        {
          project_name: '数据作战室',
          project_role: '前端负责人',
          project_time: '2019.04 - 2020.06',
          project_desc:
            '面向总裁和高管以及决策 BI 的数字化经营决策和管理协同产品。提供一站式的数据化经营决策和管理协同功能，让高管高效获取决策信息，并提升管理效率。',
          project_content:
            '1. 项目从0到1的框架设计和开发 2. 产品体验精雕细琢的打磨 3. 建立稳定性保障机制。目前仍在迭代中，帮助提升高管业务决策效率',
        },
        {
          project_name: 'DeepInsight',
          project_role: '可视分析负责人',
          project_time: '2018.07 - 2019.04 / 2020.07 - 至今',
          project_desc:
            'DeepInsight 是蚂蚁集团自主研发的自助式 BI 数据洞察分析平台，面向企业分析人员、业务人员和开发人员，帮助蚂蚁集团实现精细化运营。',
          project_content:
            'BI 平台工具核心部分是报表制作，也就是通过数据连接、可视化配置形成图表物料之后，通过拖拽方式进行页面编排，最终形成报表页面进行发布的过程。\n1. 主导开放能力建设，拉通产品、设计建设和扩展可视化图形，提升丰富度\n2. 产品体验优化，尤其是对 ECharts 的体验顽疾进行攻克\n3. 主导可视化能力建设：业务标准化图表库建设(通用组件设计和开发经验丰富)、促进数据分析能力增强等可视化一体化建设',
        },
        {
          project_name: 'G2、G2Plot',
          project_role: '核心开发者',
          project_time: '2019 - 至今',
          project_desc:
            'G2 是基于图形语法理论的可视化渲染引擎，G2Plot 是在 G2 基础上封装的开箱即用的统计可视化图表库',
          project_content:
            'AntV 可视化建设，赋能整个蚂蚁和阿里集团统计可视化分析相关业务。负责 AntV 系列: AntV 官网、G 渲染引擎、 G2、G2Plot、ThemeSet 主题构建器等开源项目的研发工作。',
        },
      ],
      workList: [],
      aboutme: {
        aboutme_desc:
          '🌱 Focus on data visualization and analysis 😈 能力项：沟通协调能力、执行力\n    自驱型前端工程师，三年多大型复杂产品开发经验，负责蚂蚁集团 BI 产品 DeepInsight 的可视化建设，参与了从图表库到 BI 产品力的一体化建设，对商业智能领域的数据可视化建设有较为丰富的经验。\n    参与 AntV 团队开源项目 G2、G2Plot 的研发，目前是 G2Plot 的主要负责人。\n    ',
      },
    },
  },
};
