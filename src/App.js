import {Route, Routes} from "react-router-dom";
import { Navigation } from './components/navigation/Navigation';
import { AboutMe } from './components/aboutMe/AboutMe';
import { Projects } from './components/projects/Projects';
import {HtmlCss} from './components/projects-item/html-css/HtmlCss';
import { Contacts } from './components/contacts/Contacts';
import { Cv } from './components/cv/Cv';
import { JavaScript } from "./components/projects-item/javaScript/JavaScript";
import { React } from "./components/projects-item/react/React";
import { ReactRedux } from "./components/projects-item/react-redux/ReactRedux";
import './App.css';

function App() {
  return (
    <>
      <Navigation/>
        <Routes>
            <Route path="/" element={<AboutMe/>} />
            <Route path="projects" element={<Projects/>} />
            <Route path="projects/html-css" element={<HtmlCss/>} />
            <Route path="projects/javaScript" element={<JavaScript/>} />
            <Route path="projects/react" element={<React/>} />
            <Route path="projects/react_redux" element={<ReactRedux/>} />
            <Route path="contacts" element={<Contacts/>} />
            <Route path="cv" element={<Cv/>} />
        </Routes> 
    </>
  );
}

export default App;