import React,{useRef} from 'react'
import styled from 'styled-components';
import ScrollToTop from './ScrollToTop/index';
import '../../App.css';
const Wrap =  styled.div`
  display: grid;
  grid-gap: 40px;
  margin-left: 25em;
  margin-top : -40rem;
  margin-right: 12em;
  grid-template-columns: repeat(5,1fr);
  grid-auto-rows: minmax(25px, auto);
  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
    margin-left: 9.2em;
    margin-top : -43rem;
    grid-gap: 20px;
  }
`;
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 40px;
  margin-top: 2em;
  margin-left: 25em;
  margin-right: 12em;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(25px, auto);
  @media screen and (max-width: 960px) {
    grid-gap: 25px;
    margin-top: 1em;
    margin-left: 8.7em;
    grid-template-columns: repeat(1, 1fr);
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

const Notes = () => {
  const CSE = useRef(null);
  const IT = useRef(null);
  const ECE = useRef(null);
  const ME = useRef(null);
  const Comments = useRef(null);
   const gotoCSE = () =>{
     window.scrollTo({top: CSE.current.offsetTop,behavior:"smooth" })
   }
   const gotoIT = () =>{
     window.scrollTo({top: IT.current.offsetTop,behavior:"smooth" })
   }
   const gotoECE = () =>{
    window.scrollTo({top: ECE.current.offsetTop,behavior:"smooth" })
  }
  const gotoME = () =>{
    window.scrollTo({top: ME.current.offsetTop,behavior:"smooth" })
  }
  const gotoComments = () =>{
    window.scrollTo({top: Comments.current.offsetTop,behavior:"smooth" })
  }
  
    return (
      <>
      <Wrap>
      <a ref={CSE} onClick={gotoCSE} class="button-ques" href={gotoCSE}>CSE</a>
      <a onClick={gotoIT} class="button-ques itme" href={gotoCSE}>IT</a>
      <a onClick={gotoECE} class="button-ques" href={gotoCSE}>ECE</a>
      <a onClick={gotoME} class="button-ques itme" href={gotoCSE}>ME</a>
      <a onClick={gotoComments} class="button-ques-com" href={gotoComments}>Comments</a>
      </Wrap>
      <GridWrapper>
    <div class="card">
    <div class="container">
    <Style>Computer Science 1st SEM Notes PDF</Style>
    <a class="button1" href="www.google.com">Click Here</a>
    </div>
  </div>
  <div class="card">
  <div class="container">
  <Style>Computer Science 2nd SEM Notes PDF</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Computer Science 3rd SEM Notes PDF</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Computer Science 4th SEM Notes PDF</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Computer Science 5th SEM Notes PDF</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Computer Science 6th SEM Notes PDF</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Computer Science 7th SEM Notes PDF</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style ref={IT}>Computer Science 8th SEM Notes PDF</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>

<div class="card">
  <div class="container">
  <Style>Information Technology 1st SEM Notes PDF</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Information Technology 2nd SEM Notes PDF</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Information Technology 3rd SEM Notes PDF</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Information Technology 4th SEM Notes PDF</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Information Technology 5th SEM Notes PDF</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Information Technology 6th SEM Notes PDF</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Information Technology 7th SEM Notes PDF</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style ref={ECE}>Information Technology 8th SEM Notes PDF</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>

<div class="card">
  <div class="container">
  <Style>Electronics & Communication 1st SEM Notes</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Electronics & Communication 2nd SEM Notes</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Electronics & Communication 3rd SEM Notes</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Electronics & Communication 4th SEM Notes</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Electronics & Communication 5th SEM Notes</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Electronics & Communication 6th SEM Notes</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Electronics & Communication 7th SEM Notes</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style ref={ME}>Electronics & Communication 8th SEM Notes</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>

<div class="card">
  <div class="container">
  <Style>Mechanical Engineering 1st SEM Notes PDF</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Mechanical Engineering 2nd SEM Notes PDF</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Mechanical Engineering 3rd SEM Notes PDF</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Mechanical Engineering 4th SEM Notes PDF</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Mechanical Engineering 5th SEM Notes PDF</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Mechanical Engineering 6th SEM Notes PDF</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Mechanical Engineering 7th SEM Notes PDF</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Mechanical Engineering 8th SEM Notes PDF</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
  </GridWrapper>
  <Wrap2>
  <div class="card1">
  <div class="container1">
  <Style ref={Comments}>Make a Comment</Style><p>(Your email will not be posted)</p>
  <div className="input-field">
  <input
 type="text"
 placeholder="Enter your name"/>
 <input
 type="text"
 placeholder="Enter your email"/>
 <form>
  <textarea placeholder='Add Your Comment'></textarea>
   <div class="btn">
     <input type="submit" value='Comment'></input>
   </div>
 </form>
  </div>
  </div>
</div>
</Wrap2>
  <ScrollToTop />
  </>
    )
}
export default Notes;
