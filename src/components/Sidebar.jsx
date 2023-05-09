import React from 'react';
import { ReactComponent as ArouActive } from "../images/arou-active.svg";
import { ReactComponent as Arou } from "../images/arou.svg";
import face from "../images/face.png";
import { ReactComponent as Help } from "../images/help.svg";
import { ReactComponent as Key } from "../images/key.svg";
import { ReactComponent as Kub } from "../images/kub.svg";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as Money } from "../images/manu.svg";
import { ReactComponent as Shape } from "../images/shape.svg";
import { ReactComponent as User } from "../images/user.svg";
const Sidebar = () => {
   return (
      <div className='sidebar__wrapper'>
         <div className='sidebar__container'>
            <biv className='sidebar__head'>
               <h2 className='sidebar__head-title'><Logo className='sidebar__head-logo' />Dashboard<span className='sidebar__head-version'>v.01</span></h2>
            </biv>
            <div className='sidebar__lists-blok'>
               <ul className='sidebar__lists'>
                  <li className='sidebar__list '>
                     <Key className='sidebar__list-img' />
                     Dashboard
                  </li>
                  <li className='sidebar__list dash'>
                     <Kub className='sidebar__list-img' />
                     Product
                     <Arou className='sidebar__list-arou' />
                  </li>
                  <li className='sidebar__list sidebar__list-active dash'>
                     <User className='sidebar__list-img' />
                     Customers
                     <ArouActive className='sidebar__list-arou' />
                  </li>
                  <li className='sidebar__list dash'>
                     <Money className='sidebar__list-img' />
                     Income
                     <Arou className='sidebar__list-arou' />
                  </li>
                  <li className='sidebar__list dash'>
                     <Shape className='sidebar__list-img' />
                     Promote
                     <Arou className='sidebar__list-arou' />
                  </li>
                  <li className='sidebar__list dash'>
                     <Help className='sidebar__list-img' />
                     Help
                     <Arou className='sidebar__list-arou' />
                  </li>
               </ul>
            </div>
            <div className='sidebar__contact'>
               <img className='sidebar__contact-face' src={face} alt='fece' />
               <div>
                  <div className='sidebar__contact-name'>Evano</div>
                  <div className='sidebar__contact-postion'>Project Manager</div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Sidebar
