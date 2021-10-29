import React from 'react';
import { slide  as MenuSidebar } from 'react-burger-menu';
import Linkmenu1 from './linkmenu/linkmenu1'
import Linkmenu2 from './linkmenu/linkmenu2'
import Linkmenu3 from './linkmenu/linkmenu3'
import Linkmenu4 from './linkmenu/linkmenu4'
import Linkmenu5 from './linkmenu/linkmenu5'



const props = () =>  {
  return (
    <MenuSidebar className="burgerMenu"  >

        <ul  className="menu-item ">
            <Linkmenu1 />
        </ul>

        <ul  className="menu-item ">
            <Linkmenu2 />
        </ul>

        <ul  className="menu-item ">
            <Linkmenu3 />
        </ul>

        <ul  className="menu-item ">
            <Linkmenu4 />
        </ul>

        <ul  className="menu-item ">
            <Linkmenu5 />
        </ul>

    </MenuSidebar>

  );
};

export default props