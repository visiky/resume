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
import _ from 'lodash';

/**
 * ① 内置的简历模块
 * ② 后续支持添加自定义模块
 */
export const MODULES = [
  { name: '头像设置', icon: <ContactsTwoTone />, key: 'avatar' },
  { name: '个人信息', icon: <ProfileTwoTone />, key: 'profile' },
  { name: '教育背景', icon: <ScheduleTwoTone />, key: 'educationList' },
  { name: '自我介绍', icon: <SmileTwoTone />, key: 'aboutme' },
  { name: '更多信息', icon: <TrophyTwoTone />, key: 'awardList' },
  { name: '个人作品', icon: <ToolTwoTone />, key: 'workList' },
  { name: '专业技能', icon: <RocketTwoTone />, key: 'skillList' },
  { name: '工作经历', icon: <TagsTwoTone />, key: 'workExpList' },
  { name: '项目经历', icon: <ProjectTwoTone />, key: 'projectList' },
];

/**
 * 模块对应配置内容
 */
export const CONTENT_OF_MODULE = {
  avatar: [
    {
      type: 'checkbox',
      attributeId: 'hidden',
      displayName: '隐藏头像',
      formItemProps: {
        valuePropName: 'checked',
      },
      cfg: {
        checked: false,
      },
    },
  ],
  profile: [
    {
      type: 'input',
      attributeId: 'name',
      displayName: '姓名',
      formItemProps: { rules: [{ required: true }] },
    },
    {
      type: 'input',
      attributeId: 'mobile',
      displayName: '手机号码',
      formItemProps: {
        rules: [{ required: true, message: 'Please input your phone number!' }],
      },
    },
    {
      type: 'input',
      attributeId: 'email',
      displayName: '邮箱',
      formItemProps: {
        rules: [{ required: true, message: 'Please input your email!' }],
      },
    },
    {
      type: 'input',
      attributeId: 'github',
      displayName: 'Github',
      cfg: {
        placeholder: 'Please input your github account, optional',
      },
    },
    {
      type: 'input',
      attributeId: 'zhihu',
      displayName: '知乎',
      cfg: {
        placeholder:
          'Please input the link to visit your zhihu account, optional',
      },
    },
    {
      type: 'input',
      attributeId: 'workExpYear',
      displayName: '工作经验',
    },
  ],
  educationList: [
    {
      type: 'input',
      attributeId: 'edu_time',
      displayName: '起始时间',
      formItemProps: { rules: [{ required: true }] },
      // cfg: { picker: 'month' },
    },
    {
      type: 'input',
      attributeId: 'school',
      displayName: '学校',
      formItemProps: { rules: [{ required: true }] },
    },
    {
      type: 'input',
      attributeId: 'major',
      displayName: '专业',
    },
  ],
  projectList: [
    {
      type: 'input',
      attributeId: 'project_name',
      displayName: '项目名称',
    },
    {
      type: 'input',
      attributeId: 'role',
      displayName: '担任角色',
    },
    {
      type: 'textArea',
      attributeId: 'project_desc',
      displayName: '项目描述',
      cfg: { autoSize: { minRows: 8 }, showCount: true },
    },
  ],
  workExpList: [
    {
      type: 'input',
      attributeId: 'work_time',
      displayName: '起止时间',
      formItemProps: { rules: [{ required: true }] },
      // cfg: { picker: 'month' },
    },
    {
      type: 'input',
      attributeId: 'company_name',
      displayName: '公司名称',
      formItemProps: { rules: [{ required: true }] },
    },
    {
      type: 'input',
      attributeId: 'department_name',
      displayName: '部门',
    },
    {
      type: 'textArea',
      attributeId: 'work_desc',
      displayName: '职位或描述',
    },
  ],
  workList: [
    {
      type: 'input',
      attributeId: 'work_name',
      displayName: '作品名称',
    },
    {
      type: 'input',
      attributeId: 'work_desc',
      displayName: '作品描述',
    },
    {
      type: 'input',
      attributeId: 'visit_link',
      displayName: '作品链接',
    },
  ],
  skillList: [
    {
      type: 'input',
      attributeId: 'skill_name',
      displayName: '技能项',
    },
    {
      type: 'number',
      attributeId: 'skill_level',
      displayName: '掌握程度',
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
      displayName: '技能描述',
    },
  ],
  awardList: [
    {
      type: 'input',
      attributeId: 'award_time',
      displayName: '获奖时间',
      formItemProps: { rules: [{ required: true }] },
      // cfg: { picker: 'month' },
    },
    {
      type: 'input',
      attributeId: 'award_info',
      displayName: '奖项内容',
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
