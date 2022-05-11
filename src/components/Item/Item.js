import s from './Item.module.css';


function Item(props) {


  return (

    <div className={s.content} >

       <img src={props.url} className={s.pic} />
       
       <p className={s.text}> {props.text}  </p>
      { console.log(props.url)}
    </div>


  );
}

export default Item;