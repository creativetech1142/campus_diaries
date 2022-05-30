import React,{useRef} from 'react'
import styled from 'styled-components';
import ScrollToTop from './ScrollToTop/index';
import '../../App.css';
const Wrap =  styled.div`
  display: grid;
  grid-gap: 40px;
  margin-left: 34em;
  margin-top : -40rem;
  margin-right: 12em;
  grid-template-columns: repeat(4,1fr);
  grid-auto-rows: minmax(25px, auto);
  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
    margin-left: 9.4em;
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
    font-size: 1.35em;
    font-weight: bolder;
   }
`;
const Syllabus = () => {
  const CSE = useRef(null);
  const IT = useRef(null);
  const ECE = useRef(null);
  const ME = useRef(null);
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
  
    return (
      <>
      <Wrap>
      <a ref={CSE} onClick={gotoCSE} class="button-ques" href={gotoCSE}>CSE</a>
      <a onClick={gotoIT} class="button-ques" href={gotoCSE}>IT</a>
      <a onClick={gotoECE} class="button-ques" href={gotoCSE}>ECE</a>
      <a onClick={gotoME} class="button-ques" href={gotoCSE}>ME</a>
      </Wrap>
      <GridWrapper>
    <div class="card">
    <div class="container">
    <Style>Computer Science 1st SEM Syllabus</Style>
    <a class="button1" href="www.google.com">Click Here</a>
    </div>
  </div>
  <div class="card">
  <div class="container">
  <Style>Computer Science 2nd SEM Syllabus</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Computer Science 3rd SEM Syllabus</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Computer Science 4th SEM Syllabus</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Computer Science 5th SEM Syllabus</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Computer Science 6th SEM Syllabus</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Computer Science 7th SEM Syllabus</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style ref={IT}>Computer Science 8th SEM Syllabus</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>

<div class="card">
  <div class="container">
  <Style>Information Technology 1st SEM Syllabus</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Information Technology 2nd SEM Syllabus</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Information Technology 3rd SEM Syllabus</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Information Technology 4th SEM Syllabus</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Information Technology 5th SEM Syllabus</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Information Technology 6th SEM Syllabus</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Information Technology 7th SEM Syllabus</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style ref={ECE}>Information Technology 8th SEM Syllabus</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>

<div class="card">
  <div class="container">
  <Style>Electronics & Comms 1st SEM Syllabus</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Electronics & Comms 2nd SEM Syllabus</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Electronics & Comms 3rd SEM Syllabus</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Electronics & Comms 4th SEM Syllabus</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Electronics & Comms 5th SEM Syllabus</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Electronics & Comms 6th SEM Syllabus</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Electronics & Comms 7th SEM Syllabus</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style ref={ME}>Electronics & Comms 8th SEM Syllabus</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>

<div class="card">
  <div class="container">
  <Style>Mechanical Engineering 1st SEM Syllabus</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Mechanical Engineering 2nd SEM Syllabus</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Mechanical Engineering 3rd SEM Syllabus</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Mechanical Engineering 4th SEM Syllabus</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Mechanical Engineering 5th SEM Syllabus</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Mechanical Engineering 6th SEM Syllabus</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Mechanical Engineering 7th SEM Syllabus</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card">
  <div class="container">
  <Style>Mechanical Engineering 8th SEM Syllabus</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
  </GridWrapper>
  <ScrollToTop />
  </>
    )
}
export default Syllabus;
