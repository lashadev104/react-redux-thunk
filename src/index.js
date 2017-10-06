import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import Header from './components/Header/header';
import NavBar from './components/NavBar/navbar';
import Notification from './components/Notifications/notifications';
import Footer from './components/Footer/footer';
import configureStore from './store/configureStore';
import routes from './routes';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore(browserHistory);

ReactDOM.render(
    <Provider store={store}>
        <div className="app">
            <Header />
            <NavBar />
            <Router history={browserHistory} routes={routes} />
            <Notification/>
            <Footer />
        </div>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
