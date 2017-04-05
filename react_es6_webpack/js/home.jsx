import React, { Component } from 'react';
import { render } from 'react-dom';
import 'boot/css/bootstrap.css';
import './base.css';


class Content extends Component {
    render() {
        return ( 
        < div > 内容页面 < /div>
        )
    }
}

render(<Content/>,document.getElementById('app'));