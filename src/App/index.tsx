import * as React from 'react';
import './App.css';
import logo from './logo.svg';

// 静态类型
export type Props = {

}

class App extends React.Component<Props> {
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
            </div>
        );
    }
}

export default App;
