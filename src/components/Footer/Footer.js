import React from 'react';
import s  from './Footer.module.css';
import f from '../../assets/f.png'
import I from '../../assets/Instagram.png'
import Y from '../../assets/Youtube.png'
import OK from '../../assets/OK.png'
import VK from '../../assets/VK.png'

import V from '../../assets/Visa.png'
import T from '../../assets/Telcell.png'
import Idram from '../../assets/Idram.png'
import M from '../../assets/MasterCard.png'
import footervector from '../../assets/footervector.png'
import vector from '../../assets/V.png'



function Footer() {


    return (

      <div className={s.footerAll}>  

<div className={s.boxContent}>

<div className={s.box}>
<p className={s.text1}> Logo</p>

<div className={s.Line}></div>

<div className={s.boxV}>
<p className={s.text2}> Սուպերմարկետ</p>
<img  className={s.vector1} src={vector}  />
</div>

<div className={s.Line}></div>

<div className={s.boxV}>
<p className={s.text2}> Օգտակար հղումներ</p>
<img  className={s.vector2} src={vector}  />
</div>
<div className={s.Line}></div>


<div className={s.boxV}>
<p className={s.text2}> Կապ </p>
<img  className={s.vector3} src={vector}  />

</div>
<div className={s.Line}></div>

</div>

 <div className={s.text3}> Մենք սոցիալական ցանցերում</div>
 
 <div className={s.socialicons}> 

  <img className={s.img}  src={f}  />
  <img className={s.img} src={I}  />
  <img className={s.img} src={Y}  />
  <img className={s.img} src={OK}  />
  <img className={s.img} src={VK}  />
  


  
 </div>

 <div className={s.text3}> Ընդունում ենք վճարման </div>


 <div className={s.paymenticons}> 

  <img className={s.img}  src={V}  />
  <img className={s.img} src={M}  />
  <img className={s.img} src={T} />
 <img className={s.fimg} src={Idram} />


 </div>

 </div>


<div className={s.footer}>

<img className={s.footerimg} src={footervector}  />

<p className={s.footertext}>

Copyright Cyber Tech LLC 2021- All rights reserved

</p>


</div>




      </div>
    );
  }

  export default Footer;