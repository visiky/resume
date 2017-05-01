import React,{ Component } from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import Sidebar from './common/sidebar';

import InfoForm from './app/components/infoForm';


class App extends Component{
   
   constructor(){
     super();
     this.state = {
        formSchema: []
     }
   }
   render(){
     return (
       <MuiThemeProvider>
          <InfoForm formSchema={this.state.formSchema}/>
      </MuiThemeProvider>
     )
   }
}

export default App;