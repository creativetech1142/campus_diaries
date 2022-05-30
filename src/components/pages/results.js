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
  grid-template-columns: repeat(1, 1fr);
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
const Style1 = styled.div`
   font-size: 2em;
   font-weight: bolder;
   margin-top: 0.5em;
   @media screen and (max-width: 960px) {
    font-size: 1.15em;
    margin-top: 0.3em;
    font-weight: bolder;
   }
`;
const Results = () => {
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
    <div class="card-result">
    <div class="container-result">
    <Style1>Login with your Roll No as username and date of birth as password to view the result.</Style1>
    </div></div>
    <div class="card-result">
    <div class="container-result">
    <Style>Computer Science Branch Result</Style>
    <a class="button1" href="http://117.239.87.85/" target="_blank" rel="noopener noreferrer">Click Here</a>
    </div>
    </div>
   <div class="card-result">
   <div class="container-result">
  <Style ref={IT}>Information Technology Branch Result</Style>
  <a class="button1" href="http://117.239.87.85/" target="_blank" rel="noopener noreferrer">Click Here</a>
  </div>
</div>
<div class="card-result">
  <div class="container-result">
  <Style ref={ECE}>Electronics & Communication Branch Result</Style>
  <a class="button1" href="http://117.239.87.85/" target="_blank" rel="noopener noreferrer">Click Here</a>
  </div>
</div>
<div class="card-result">
  <div class="container-result">
  <Style ref={ME}>Mechanical Engineering Branch Result</Style>
  <a class="button1" href="http://117.239.87.85/" target="_blank" rel="noopener noreferrer">Click Here</a>
  </div>
</div>
  </GridWrapper>
  <ScrollToTop />
  </>
    )
}
export default Results;
