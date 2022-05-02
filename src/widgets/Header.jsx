import React from 'react';
import Logo from '../logo.svg'

function Header(props) {
    return (
        <header className='flex justify-between items-center h-20'>
            <img src={Logo} className={'w-8 h-8'} alt=""/>
            <nav className={'flex items-center'}>
                <a href="#">登录</a>
                <a href="#" className='ml-8 bg-gray-900 px-4 py-2 rounded text-blue-50 flex items-center'>注册</a>
            </nav>
        </header>
    );
}

export default Header;
