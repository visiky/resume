// formSchema 格式
// const formSchema = [{
//   hintText:null,
//   errorText:"This field is required",
//   defaultValue:null,
//   floatingLabelText:null,
//   multiLine:false,
//   rows:null,
//   rowsMax:null,
//   fullWidth:false,
//   onChange:null // {function}
// }]

export const FORM_SCHEMA = {
  BASIC_INFO: [
    {
      hintText: '姓名',
      errorText: 'This field is required',
      floatingLabelText: '姓名',
      name: 'fullname',
    },
    {
      hintText: '求职岗位',
      floatingLabelText: '求职岗位',
      errorText: 'This field is required',
      name: 'jobTitle',
    },
    {
      hintText: '学校 专业 2018届毕业生',
      floatingLabelText: '个人介绍1',
      errorText: 'This field is required',
      name: 'profile1',
    },
    {
      hintText: '个人介绍2(可选) - 荣誉／奖项等',
      floatingLabelText: '个人介绍2(可选)',
      name: 'profile2',
    },
    {
      hintText: '个人介绍3(可选) - 英语水平等',
      floatingLabelText: '个人介绍3(可选)',
      name: 'profile3',
    },
    {
      hintText: '联系方式',
      errorText: 'This field is required',
      floatingLabelText: '联系方式',
      name: 'phone',
    },
    {
      hintText: '邮箱',
      floatingLabelText: 'email',
      name: 'email',
    },
    {
      hintText: '擅长／爱好（以逗号分隔多项）',
      floatingLabelText: '擅长／爱好',
      name: 'personalSkill',
    },
    {
      hintText: '博客',
      floatingLabelText: '博客',
      name: 'blog',
    },
    {
      hintText: 'Github',
      floatingLabelText: 'github(可选)',
      name: 'github',
    },
    {
      hintText: 'Fackbook',
      floatingLabelText: 'Fackbook(可选)',
      name: 'facebook',
    },
    {
      hintText: 'Weibo',
      floatingLabelText: 'Weibo(可选)',
      name: 'weibo',
      onChange: null, // {function}
    },
  ],
  EXPERIENCE: [
    {
      errorText: 'This field is required',
      floatingLabelText: '实习 ？奖项 ？论文 ？',
      name: 'experienceType',
    },
    {
      floatingLabelText: '相关介绍',
      name: 'experienceDescription',
    },
    {
      floatingLabelText: '体验链接',
      name: 'experienceRefLink',
    },
  ],
  SKILL: [
    {
      floatingLabelText: '擅长的技能',
      name: 'skillType',
    },
    {
      floatingLabelText: '掌握程度(%)',
      name: 'skillLevel',
    },
    {
      floatingLabelText: '描述1',
      name: 'skillDescription1',
    },
    {
      floatingLabelText: '描述2(可选)',
      name: 'skillDescription2',
    },
    {
      floatingLabelText: '描述3(可选)',
      name: 'skillDescription3',
    },
  ],
  APPRAISAL: [
    {
      floatingLabelText: '简单介绍一下自己吧 🐶',
      multiLine: true,
      rows: 1,
      rowsMax: 10,
    },
  ],
};
