import React from 'react';
import TextField from 'material-ui/TextField';


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

const formSchema = [{
  hintText:"Your Name",
  errorText:"This field is required",
  floatingLabelText:"Name",
  onChange:null // {function}
},{
  hintText:"Your Telephone",
  errorText:"This field is required",
  floatingLabelText:"Telephone",
  onChange:null // {function}
},{
  hintText:"Your Blog",
  floatingLabelText:"Name",
  onChange:null // {function}
},{
  hintText:"Your Name",
  errorText:"This field is required",
  floatingLabelText:"Name",
  onChange:null // {function}
},{
  hintText:"Your Name",
  errorText:"This field is required",
  floatingLabelText:"Name",
  onChange:null // {function}
}]




const InfoForm = () => (
  <div>
      {
        formSchema.map(fieldSchema => {
            <TextField
              {...fieldSchema} onChange={()=>{}}
            />
        })
      }
  </div>
);

export default InfoForm;