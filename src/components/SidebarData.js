import React from "react";
import {FaHandsHelping} from 'react-icons/fa';
import {FaQuestionCircle} from 'react-icons/fa';
import {CgNotes} from 'react-icons/cg';
import {FaCopyright} from 'react-icons/fa';
import {GiBookmark} from 'react-icons/gi';
import {FaCopy} from 'react-icons/fa';
import {BiTable} from 'react-icons/bi';
import {BsGraphUp} from 'react-icons/bs';
import {AiOutlineFilePdf} from 'react-icons/ai'
import {MdWork} from 'react-icons/md'
import {MdDateRange} from 'react-icons/md'
export const SidebarData = [
  {
    title: "Question Papers",
    icon: <FaQuestionCircle />,
    link: "/academics/questionPapers"
    
  },
  {
    title: "E-Books",
    icon: <GiBookmark />,
    link: "/academics/e-books"
  },
  {
    title: "Notes",
    icon: <CgNotes />,
    link: "/academics/notes"
  },
  {
    title: "Lab Work",
    icon: <FaCopy />,
    link: "/academics/labWork"
  },
  {
    title: "Timetable",
    icon: <BiTable />,
    link: "/academics/timetable"
  },
  {
    title: "Datesheet",
    icon: <MdDateRange />,
    link: "/academics/datesheet"
  },
  {
    title: "Results",
    icon: <BsGraphUp />,
    link: "/academics/results"
  },
  {
    title: "Syllabus",
    icon: <AiOutlineFilePdf />,
    link: "/academics/syllabus"
  },
  {
    title: "Placement",
    icon: <MdWork />,
    link: "/academics/placement",
  },
  {
    title: "Contribute",
    icon: <FaHandsHelping />,
    link: "/academics/contribute"
  },
  {
    title: "Copyright",
    icon: <FaCopyright />,
    link: "/academics/copyright"
  }
];