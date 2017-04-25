import React, { Component } from 'react';
import style from './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.bg}>
                <h1 className={style.h1}>Hello World.</h1>
            </div>
        )
    }
}

export default App;