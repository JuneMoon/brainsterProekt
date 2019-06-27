import React from 'react';

import "../assets/css/gamebox.css";
import DrawerToggleButton from 'components/SideDrawer/DrawerToggleButton.jsx';

import { Nav, Button } from 'reactstrap';

const Toolbar = props => (
    <header className="toolbar fixed">
        <Nav className="toolbar__navigation">
            <div  className="menuu">
                <DrawerToggleButton click={props.drawerClickHandler} />
                <button onClick={props.drawerClickHandler}>Мени </button>
            </div>
            <div className="toolbar__logo"><a className="logoo" href="/">
                <img src={require("assets/img/brainlogo.png")} alt="Logo" /></a>
            </div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li><Button className="btn btn-warning" href="https://www.brainster.io/business">Обуки за компании</Button></li>
                    <li><Button className="btn btn-darker text-warning" href="https://www.brainster.io/business">Вработи наши студенти</Button></li>
                </ul>
            </div>
        </Nav>
    </header>
);

export default Toolbar;