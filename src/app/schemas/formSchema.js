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
  'BASIC_INFO': [{
          hintText:"姓名",
          errorText:"This field is required",
          floatingLabelText:"姓名",
          name: "fullname",
          onChange:null, // {function}
          fullWidth:true      
        },{
          hintText:"求职岗位",
          floatingLabelText:"求职岗位",
          name: "jobTitle",
          onChange:null, // {function}
          fullWidth:true 
        },{
          hintText:"联系方式",
          errorText:"This field is required",
          floatingLabelText:"联系方式",
          name: "phone",
          onChange:null, // {function}
          fullWidth:true
        },{
          hintText:"学校",
          floatingLabelText:"学校",
          name: "school",
          onChange:null, // {function}
          fullWidth:true
        },{
          hintText:"专业",
          floatingLabelText:"专业",
          name: "apartment",
          onChange:null, // {function}
          fullWidth:true
        },{
          hintText:"学位&毕业时间",
          floatingLabelText:"学位&毕业时间",
          name: "graduateTime",
          onChange:null, // {function}
          fullWidth:true
        },{
          hintText: "邮箱",
          floatingLabelText: "email",
          name: "email",
          onChange: null, // {function}
          fullWidth:true,
        },{
          hintText: "Your QQ",
          floatingLabelText: "QQ",
          onChange: null, // {function}
          fullWidth:true
        },{
          hintText:"博客",
          floatingLabelText:"博客",
          name: "blog",
          onChange:null, // {function}
          fullWidth:true 
        },{
          hintText: "Github",
          floatingLabelText: "github",
          name: "github",
          onChange: null, // {function}
          fullWidth:true 
        },],
    'EXPERIENCE':[{
          errorText: "This field is required",
          floatingLabelText: "实习 ？奖项 ？论文 ？", 
          name: "experienceType",
          fullWidth:true
        },{
          floatingLabelText: "相关介绍", 
          name: "experienceDescription",
          fullWidth:true
        },{
          floatingLabelText: "体验链接", 
          name: "experienceRefLink",
          fullWidth:true
        }],
      'SKILL':[{
          floatingLabelText: "擅长的技能",
          name: "skillType", 
          fullWidth:true
        },{
          floatingLabelText: "掌握程度(%)",
          name: "skillLevel", 
          fullWidth:true
        },{
          floatingLabelText: "描述", 
          name: "skillDescription",
          fullWidth:true
        }],
    'APPRAISAL':[{
      floatingLabelText: "简单介绍一下自己吧 🐶",
      multiLine: true,
      rows: 1,
      rowsMax: 10,
      fullWidth:true
    }]
}

