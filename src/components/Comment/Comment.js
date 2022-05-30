import React,{useState,useRef} from 'react'
import styled from 'styled-components';
import moment from 'moment'
import '../../App.css';
const Wrap2 =  styled.div`
  display: grid;
  grid-gap: 10px;
  margin-left: 34.5em;
  margin-top: 2rem;
  margin-right: 12em;
  grid-template-columns: repeat(1,1fr);
  grid-auto-rows: minmax(25px, auto);
  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
    margin-left: 8.6em;
    margin-top : 2rem;
    grid-gap: 20px;
  }
`;
const Style = styled.div`
   font-size: 2em;
   font-weight: bolder;
   @media screen and (max-width: 960px) {
    font-size: 1.3em;
    font-weight: bolder;
   }
`;
function Comment(){
   const [inputList,setInputList] = useState({
      name: "",
      email: "",
      comment: ""
   });
   const [items,setItems] = useState([]);
   const seeComments = useRef(null);
   const goToseeComments = () =>{
    window.scrollTo({top: seeComments.current.offsetTop,behavior:"smooth" })
   }
   const inputEvent = (event) =>{
      const value= event.target.value;
      const name= event.target.name;

      setInputList((preValue)=>{
         if(name === 'name'){
           return{
            name: value,
            email: preValue.email,
            comment: preValue.comment
           }
         }
         else if(name === 'email'){
          return{
           name: preValue.name,
           email: value,
           comment: preValue.comment
          }
        }
        else if(name === 'comment'){
          return{
           name: preValue.name,
           email: preValue.email,
           comment: value
          }
        }
      })
   }
   const listOfitems =(event)=>{
     event.preventDefault();
    if(inputList.name===''||inputList.email===''||inputList.comment===''){
      alert('Fill all the fields');
      return;
   }
      setItems((oldItems)=>{
          return [inputList, ...oldItems];
      })
      setInputList({
        name: "",
        email: "",
        comment: ""
      });
   }
    
    return (
        <Wrap2>
        <div class="card1">
        <div class="container1">
        <Style>Make a Comment</Style><p>(Your email will not be posted)</p>
        <div className="input-field">
        <form>
        <input
       type="text" name="name"
       placeholder="Enter your name" onChange={inputEvent}
        value={inputList.name}
       />
       <input
       type="text" name="email" 
       placeholder="Enter your email" onChange={inputEvent}
       value={inputList.email}
       />
        <textarea name="comment" placeholder='Add Your Comment' onChange={inputEvent} value={inputList.comment}></textarea>
         <div class="btn" onClick={goToseeComments}>
           <input type="submit" value='Comment' onClick={listOfitems}/>
         </div>
       </form>
        </div>
        </div>
      </div>
      <div className="comment-display">
      <div ref={seeComments}>
        {items.length===0?<Style>No comments yet...</Style>:
           items.length===1?<Style>1 comment</Style>:<Style>{items.length} comments</Style>
        }
      </div>
      {
         items.map((item)=>{
             return (
              <div class="cardc">
              <div class="containerc">
              <h2 className="S"><strong>{item.name}</strong></h2>
              <p className="H3">{item.comment}</p>
              <h5 className="T"><i class="fas fa-clock"></i>&nbsp; {moment(item.time).format('MMMM Do YYYY, h:mm a')}</h5>
              </div>
              </div>
             )
         })
      }
      </div>
      </Wrap2>
    )
 }
export default Comment;
