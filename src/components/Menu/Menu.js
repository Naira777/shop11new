import React from 'react';
import s from './Menu.module.css';
import menu from  '../../assets/menu.png';
import icons from  '../../assets/icons.png';


function Menu() {
    return (
      
      <div className={s.menu}>
        

  <img  src={menu} className={s.menuPic} />



 <p className={s.text}> LOGO </p>




  <img  src={icons} className={s.icons}  />
 
  
  
      </div>
    
      
    );
  }
  //media 360
  export default Menu;