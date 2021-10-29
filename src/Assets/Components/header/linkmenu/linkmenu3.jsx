import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    Menu,
    MenuItem,
    MenuButton,
    SubMenu
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

const Linkmenu3 = () =>  {

    return (

        <Menu  menuButton={<MenuButton>Veranstaltungen</MenuButton>}>
               <SubMenu label="Adtralza">
               <MenuItem className="dropdown__item" ><NavLink to="/#">Overview</NavLink></MenuItem>
                    <MenuItem className="dropdown__item" ><NavLink to="/#">Mode of Actio</NavLink></MenuItem>
                    <MenuItem className="dropdown__item" ><NavLink to="/#">Efficacy</NavLink></MenuItem>
                    <MenuItem className="dropdown__item" ><NavLink to="/#">Quality of Life</NavLink></MenuItem>
                    <MenuItem className="dropdown__item" ><NavLink to="/#">Safety</NavLink></MenuItem>
                    <MenuItem className="dropdown__item" ><NavLink to="/#">Dosing</NavLink></MenuItem>
                    <MenuItem className="dropdown__item" ><NavLink to="/#">News</NavLink></MenuItem>
                    <MenuItem className="dropdown__item" ><NavLink to="/#">Technical Information</NavLink></MenuItem>
            </SubMenu>
                <MenuItem >Diavonex</MenuItem>
                <MenuItem >Diavobet</MenuItem>
                <MenuItem >Enstilar</MenuItem>
                <MenuItem >Fucidin</MenuItem>
                <MenuItem >Kyntheum</MenuItem>
                <MenuItem >Protopic</MenuItem>
                <MenuItem >Skinoren</MenuItem>
                <MenuItem >Tralokinumab</MenuItem>
                <MenuItem >Xamiol</MenuItem>
     
        </Menu>
    );
}

export default Linkmenu3