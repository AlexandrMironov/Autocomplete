import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { createAppStore } from './store/utils';


const renderApp = () => {
    const root = document.getElementById('root');
    const store = createAppStore();

    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>, root);

}

renderApp();
