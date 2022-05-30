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
const Datesheet = () => {
    const MST1 = useRef(null);
    const MST2 = useRef(null);
    const FINAL = useRef(null);
    const gotoMST1 = () =>{
       window.scrollTo({top: MST1.current.offsetTop,behavior:"smooth" })
    }
    const gotoMST2 = () =>{
       window.scrollTo({top: MST2.current.offsetTop,behavior:"smooth" })
    }
    const gotoFINAL = () =>{
      window.scrollTo({top: FINAL.current.offsetTop,behavior:"smooth" })
    }
    return (
      <>
      <Wrap>
      <a onClick={gotoMST1} class="button-ques1" href={gotoMST1}>MST1</a>
      <a onClick={gotoMST2} class="button-ques1 itme1" href={gotoMST2}>MST2</a>
      <a onClick={gotoFINAL} class="button-ques-com" href={gotoFINAL}>FINALS</a>
      </Wrap>
      <GridWrapper>
<div class="card-date">
  <div class="container-date">
  <Style ref={MST1}>MST 1 Datesheet For All</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card-date">
  <div class="container-date">
  <Style ref={MST2}>MST 2 Datesheet For All</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
<div class="card-date">
  <div class="container-date">
  <Style ref={FINAL}>Final Exam Datesheet For All</Style>
  <a class="button1" href="www.google.com">Click Here</a>
  </div>
</div>
  </GridWrapper>
  <ScrollToTop />
  </>
    )
}
export default Datesheet;
