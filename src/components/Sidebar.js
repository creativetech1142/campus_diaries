import React from "react";
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import "../App.css";
import { SidebarData } from "./SidebarData";
import { BrowserRouter, Route } from 'react-router-dom';
import QuestionPapers from './pages/questionPapers';
import Ebooks from './pages/ebooks';
import Notes from './pages/notes';
import LabWork from './pages/labWork';
import Results from './pages/results';
import Syllabus from './pages/syllabus';
import Timetable from './pages/timetable';
import ScrollToTop from './pages/ScrollToTop';
import Datesheet from "./pages/datesheet";
const NavLink = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  @media screen and (max-width: 1000px) {
    font-size: 1rem;
  }

`;
function Sidebar() {
  return (
    <BrowserRouter>
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
          <NavLink to={val.link}>
          <li key={key} 
          className="row" 
          id={window.location.pathname === val.link ? "active": ""}
          onClick={() => {
              window.location.pathname=val.link;
          }}
          >
          
            <div id="icon">{val.icon}</div>
            <div id="title">{val.title}</div>
          </li></NavLink>
          );
        })}   
      </ul>
      <main>
          <ScrollToTop />
          <Route path="/academics/questionPapers" exact component={QuestionPapers} />
          <Route path="/academics/e-books" component={Ebooks} />
          <Route path="/academics/notes" component={Notes} />
          <Route path="/academics/labWork" component={LabWork} />
          <Route path="/academics/results" component={Results} />
          <Route path="/academics/syllabus" component={Syllabus} />
          <Route path="/academics/timetable" component={Timetable} />
          <Route path="/academics/datesheet" component={Datesheet} />
       </main>
            </div>
            </BrowserRouter>
          );
}

export default Sidebar;