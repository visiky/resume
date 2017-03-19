import React from 'react'

const Button = React.createClass({
    handleClick() {
        window.print();
    },
    render() {
        return <div className="toolBox">
            <ul className="">
                <li><a href='https://github.com/Me-Momo/resume' target='_blank'>源代码</a></li>
               <li><input type='button' id="btnPrint" onClick={this.handleClick} value='打印' /></li>    
            </ul>     
        </div>
        
    }
});

export default Button;




