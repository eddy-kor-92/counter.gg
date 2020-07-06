import React from 'react';
import { Route } from 'react-router-dom'
import MainPage from './body-contents/main/MainPage'
import Statistics from './body-contents/statistics/Statistics';
import './MainBody.scss';

const MainBody = () => {
    return (
        <div className='MainBody'>
            <Route path='/' exact component= {MainPage} />
            <Route path='/statistics' exact component= {Statistics} />
        </div>
    );
}

export default MainBody;