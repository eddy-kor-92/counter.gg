import React from 'react'
import HeaderMenu from './header-contents/HeaderMenu'
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom'
import './MainHeader.scss';

const MainHeader = (props) => {
    const { history } = props;

    const menus = [
        {
            name: '에이',
            path: '/'
        }, {
            name: '비',
            path: '/statistics'
        }, {
            name: '씨',
            path: '/statistics'
        }
    ];

    const renderMenus = () => {
        return menus.map(menu => <HeaderMenu key={menu.name} name={menu.name} onClick={() => moveToTargetPage(menu.path)}/>);
    }

    const moveToTargetPage = to => {
        history.push(to);
    }

    return (
        <div className='MainHeader'>
            <div className='LeftSide'>{renderMenus()}</div>
            <div className='RightSide'>
                <Button variant='contained' color='primary'>로그인</Button>
            </div>
        </div>
    );
}

export default withRouter(MainHeader);