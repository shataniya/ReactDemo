import React from 'react'
import style from './App.css'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return (
            <div className={style.app}>
                <h1>Hello, World!</h1>
            </div>
        )
    }
}

export default App