import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import Hello from './helloworld';
import Tic from './tictactoe';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { HashRouter, Route, Link } from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        {/* 通用头 */}
        <App />
        {/* 超链接 */}
        <Link to='/'>首页</Link>
        <br />
        <Link to='/tictactoe'>井字棋</Link>

        {/* 路由 */}
        <Route path='/' exact component={Hello} />
        <Route path='/tictactoe' exact component={Tic} />
    </HashRouter>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
