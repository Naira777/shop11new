import React from 'react';
import s from './Header.module.css';
import drosh from  '../../assets/drosh.png';
import vector from  '../../assets/vec.png';
import phone from  '../../assets/Phone.png';


function Header() {
    return (


      <div className={s.header}>
        <img src={phone} className={s.phone} />
        
<div className={s.box}>

  <img  src={drosh} className={s.drosh} />
 
<img  src={vector} className={s.vector} />

</div>

      </div>
    );
  }

  export default Header;