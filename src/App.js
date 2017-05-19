import React,{Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import FullWidthSection from './containers/FullWidthSection';


class App extends Component{
    
	render () {
		return (
            <MuiThemeProvider>           
                <FullWidthSection />
            </MuiThemeProvider>
		);
	}
}

export default App;
