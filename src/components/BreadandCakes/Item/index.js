import s from './index.module.css';
import dexin from '../../../assets/Dexin.png'
import karmir from '../../../assets/Karmir.png'
import star from '../../../assets/star.png'
import basket from '../../../assets/basket.png'

function Item({ url, text, price, prevPrice}) {


  return (

  <div className={s.content} >
  <div className={s.box1}>
  <img src={url} className={s.picBig} />  
  <img src={dexin} className={s.pic1} />
  <img src={karmir} className={s.pic2} />

  </div>

  <div className={s.box2}>

    <p className={s.text}> {text}  </p>
    <img src={star} className={s.star} />

   <p className={s.Priceline}> {`${prevPrice} Դ`} </p>
    <p className={s.Price}>{`${price} Դ`}  </p>
    <p className={s.Pricefor1}> {`1հատ/${price} Դ`} </p>
   
<div className={s.box3}>

<div className={s.basket}> 
 <img src={basket} className={s.picbasket} />  
 </div>

</div>

  </div>
  
    </div>


  );
}

export default Item;