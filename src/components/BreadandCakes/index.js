import React, { useEffect } from 'react';
import s from './Index.module.css';
import {useDispatch, useSelector} from 'react-redux'
import vector from  '../../assets/vector.png';
import Item from './Item/index'
import { getCategories } from '../../redux/reducer';
import {Link, NavLink, useNavigate} from 'react-router-dom'
import { notInitialized } from 'react-redux/es/utils/useSyncExternalStore';

function BreadandCakes() {

const categories = useSelector(state => state.CategoryPage.categories)
const dispatch = useDispatch()
const navigate = useNavigate()



useEffect (()=>{

dispatch(getCategories())

},[])


const handleClick = () => {
    document.getElementById('bolor').style='background: #3D9A85;'
}


    
    return (

       <div className={s.Content}>


<img  src={vector} className={s.vector} />
         
    <p className={s.text}>Հացաբուլկեղեն և թխվածք</p>


<div className={s.Box} >
<NavLink end to="/breadandcakes" style={({isActive}) => ({
    textDecoration: 'none',
  
   
  })}>

 <div className={s.Button}  onClick={handleClick} id="bolor">Բոլորը</div>
</NavLink>


<NavLink end to="/bread" style={({isActive}) => ({
    textDecoration: 'none',
     
  })}>
 <div className={s.Button}> Հաց  </div>
 </NavLink>

<NavLink end to="/sweety" style={({isActive}) => ({
    textDecoration: 'none',
  
   
  })}>
 <div className={s.Button}>Թխվածք   </div>
</NavLink>

<NavLink end to="/cakes" style={({isActive}) => ({
    textDecoration: 'none',
  
   
  })}>
 <div className={s.Button}>Խմորեղեն   </div>
</NavLink>

<NavLink end to="/cakes" style={({isActive}) => ({
    textDecoration: 'none',
  
   
  })}>
 <div className={s.Button}>Տորթ   </div>
</NavLink>

 <NavLink end to="/drybread" style={({isActive}) => ({
    textDecoration: 'none',
  
   
  })}>
 <div className={s.Button}>Սուխարիկներ  </div>
    </NavLink>

</div>
<div className={s.boxContent }>

{categories.length > 0 && categories.map((item, id) => {

return (
<div key={id} >
<Item text={item?.name}  url={item?.image?.url}  price={'200'} prevPrice={'250'} />
</div>
)

})

}



</div>






       </div>


    );
  }
 
  export default BreadandCakes;