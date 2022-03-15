import React from 'react';
import {
  ProfileTwoTone,
  ContactsTwoTone,
  SmileTwoTone,
  TrophyTwoTone,
  TagsTwoTone,
  RocketTwoTone,
  ProjectTwoTone,
  ToolTwoTone,
  ScheduleTwoTone,
} from '@ant-design/icons';
import _ from 'lodash-es';
import type { ResumeConfig } from '@/components/types';

/**
 * ① 内置的简历模块
 * ② 后续支持添加自定义模块
 */
export const MODULES = ({
  i18n,
  titleNameMap,
}: {
  i18n: any;
  titleNameMap?: ResumeConfig['titleNameMap'];
}) => {
  return [
    { name: i18n.get('头像设置'), icon: <ContactsTwoTone />, key: 'avatar' },
    { name: i18n.get('个人信息'), icon: <ProfileTwoTone />, key: 'profile' },
    {
      name: i18n.get('教育背景'),
      icon: <ScheduleTwoTone />,
      key: 'educationList',
    },
    { name: i18n.get('自我介绍'), icon: <SmileTwoTone />, key: 'aboutme' },
    { name: i18n.get('更多信息'), icon: <TrophyTwoTone />, key: 'awardList' },
    { name: i18n.get('个人作品'), icon: <ToolTwoTone />, key: 'workList' },
    { name: i18n.get('专业技能'), icon: <RocketTwoTone />, key: 'skillList' },
    { name: i18n.get('工作经历'), icon: <TagsTwoTone />, key: 'workExpList' },
    {
      name: i18n.get('项目经历'),
      icon: <ProjectTwoTone />,
      key: 'projectList',
    },
  ].map(d => {
    const name = _.get(titleNameMap, d.key);
    return { ...d, name: _.isNil(name) ? d.name : name };
  });
};

/**
 * 模块对应配置内容
 */
export const CONTENT_OF_MODULE = ({ i18n }) => {
  return {
    avatar: [
      {
        type: 'checkbox',
        attributeId: 'hidden',
        displayName: i18n.get('隐藏头像'),
        formItemProps: {
          valuePropName: 'checked',
        },
        cfg: {
          checked: false,
        },
      },
      {
        type: 'select',
        attributeId: 'shape',
        displayName: i18n.get('头像形状'),
        cfg: {
          defaultValue: 'circle',
          options: [{ value: 'circle', label: i18n.get('圆形') }, { value: 'square', label: i18n.get('方形') }],
        },
      },
    ],
    profile: [
      {
        type: 'input',
        attributeId: 'name',
        displayName: i18n.get('姓名'),
        formItemProps: { rules: [{ required: true }] },
      },
      {
        type: 'input',
        attributeId: 'mobile',
        displayName: i18n.get('手机号码'),
        formItemProps: {
          rules: [
            { required: true, message: 'Please input your phone number!' },
          ],
        },
      },
      {
        type: 'input',
        attributeId: 'email',
        displayName: i18n.get('邮箱'),
        formItemProps: {
          rules: [{ required: true, message: 'Please input your email!' }],
        },
      },
      {
        type: 'input',
        attributeId: 'github',
        displayName: i18n.get('Github'),
        cfg: {
          placeholder: 'Please input your github account, optional',
        },
      },
      {
        type: 'input',
        attributeId: 'zhihu',
        displayName: i18n.get('知乎'),
        cfg: {
          placeholder:
            'Please input the link to visit your zhihu account, optional',
        },
      },
      {
        type: 'input',
        attributeId: 'workExpYear',
        displayName: i18n.get('工作经验'),
      },
      {
        type: 'input',
        attributeId: 'workPlace',
        displayName: i18n.get('工作地'),
      },
      {
        type: 'input',
        attributeId: 'positionTitle',
        displayName: i18n.get('职位'),
      },
    ],
    educationList: [
      {
        type: 'input',
        attributeId: 'edu_time',
        displayName: i18n.get('起始时间'),
        formItemProps: { rules: [{ required: true }] },
        // cfg: { picker: 'month' },
      },
      {
        type: 'input',
        attributeId: 'school',
        displayName: i18n.get('学校'),
        formItemProps: { rules: [{ required: true }] },
      },
      {
        type: 'input',
        attributeId: 'major',
        displayName: i18n.get('专业'),
      },
    ],
    projectList: [
      {
        type: 'input',
        attributeId: 'project_name',
        displayName: i18n.get('项目名称'),
      },
      {
        type: 'input',
        attributeId: 'project_role',
        displayName: i18n.get('担任角色'),
      },
      {
        type: 'textArea',
        attributeId: 'project_desc',
        displayName: i18n.get('项目描述'),
        cfg: { autoSize: { minRows: 8 }, showCount: true },
      },
    ],
    workExpList: [
      {
        type: 'input',
        attributeId: 'work_time',
        displayName: i18n.get('起止时间'),
        formItemProps: { rules: [{ required: true }] },
        // cfg: { picker: 'month' },
      },
      {
        type: 'input',
        attributeId: 'company_name',
        displayName: i18n.get('公司名称'),
        formItemProps: { rules: [{ required: true }] },
      },
      {
        type: 'input',
        attributeId: 'department_name',
        displayName: i18n.get('部门'),
      },
      {
        type: 'textArea',
        attributeId: 'work_desc',
        displayName: i18n.get('职位或描述'),
      },
    ],
    workList: [
      {
        type: 'input',
        attributeId: 'work_name',
        displayName: i18n.get('作品名称'),
      },
      {
        type: 'input',
        attributeId: 'work_desc',
        displayName: i18n.get('作品描述'),
      },
      {
        type: 'input',
        attributeId: 'visit_link',
        displayName: i18n.get('作品链接'),
      },
    ],
    skillList: [
      {
        type: 'input',
        attributeId: 'skill_name',
        displayName: i18n.get('技能项'),
      },
      {
        type: 'number',
        attributeId: 'skill_level',
        displayName: i18n.get('掌握程度'),
        cfg: {
          step: 20,
          min: 0,
          max: 100,
          formatter: value => `${value}%`,
          parser: value => _.replace(value, '%', ''),
        },
      },
      {
        type: 'textArea',
        attributeId: 'skill_desc',
        displayName: i18n.get('技能描述'),
      },
    ],
    awardList: [
      {
        type: 'input',
        attributeId: 'award_time',
        displayName: i18n.get('获奖时间'),
        formItemProps: { rules: [{ required: true }] },
        // cfg: { picker: 'month' },
      },
      {
        type: 'input',
        attributeId: 'award_info',
        displayName: i18n.get('奖项内容'),
        formItemProps: { rules: [{ required: true }] },
      },
    ],
    aboutme: [
      {
        type: 'textArea',
        attributeId: 'aboutme_desc',
        cfg: { autoSize: { minRows: 4 }, showCount: true },
      },
    ],
  };
};
