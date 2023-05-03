import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import All from './Component.js/All';
import Html from './Component.js/Html';
import Javascript from './Component.js/Javascript';
import Reactt from './Component.js/Reactt';

function Projects(params) {
    const [active, setActive] = React.useState("all")
    function handleAll(params) {
        setActive("all")
    }
    function handleReact(params) {
        setActive("react")
    }
    function handleJs(params) {
        setActive("js")
    }
    function handleHC(params) {
        setActive("html")
    }
    return(
        <main className='project-dev py-3'>
            <div className='container text-center '>
            <h2 className='fw-bolder fs-4'>PROJECTS</h2>
            <div className='row justify-content-between'>
                <button onClick={handleAll} className='project-div fw-bold p-2 col m-1'>ALL</button>
               <button onClick={handleReact} className='project-div fw-bold p-2 col m-1'>REACT</button>
               <button onClick={handleJs} className='project-div fw-bold p-2 col m-1'>JAVASCRIPT</button>
               <button onClick={handleHC} className='project-div fw-bold p-2 col m-1'>HTMl/CSS</button>
            </div>
            {active === "all" && <All />}
          {active === "react" && <Reactt />}
           {active === "js" && <Javascript />}
            {active === "html" &&<Html />}
        </div>
        </main>
    )
}

export default Projects