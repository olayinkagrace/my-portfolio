import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaHtml5, FaCss3, FaBootstrap, FaJs, FaReact, FaJava, FaGit, FaGithub, FaNodeJs} from "react-icons/fa"


function Skills(params) {
    return(<main className="text-center container py-5">
        <h4 className="fw-bolder fs-4 py-2">Skills</h4>
        <div className="row justify-content-between text-center">
            <div className="skills-div text-center  m-3">
               <div className="align-items-center text-center">
               <FaHtml5 className="fs-1 icon-one" />
                <small className=" fw-bold block_it">HTML</small>
               </div>
            </div>
            <div className="skills-div text-center m-3">
               <div>
               <FaCss3 className="fs-1 icon-five" />
                <small className=" fw-bold block_it">CSS</small>
               </div>
            </div>
            <div className="skills-div text-center m-3">
               <div>
               <FaBootstrap className="fs-1 icon-four" />
                <small className=" fw-bold block_it">Boostrap</small>
               </div>
            </div>
            <div className="skills-div text-center m-3">
               <div>
               <FaJs className="fs-1 icon-three" />
                <small className=" fw-bold block_it">JS</small>
               </div>
            </div>
            <div className="skills-div text-center m-3">
               <div>
               <FaReact className="fs-1 bg-info" />
                <small className=" fw-bold block_it">REACT</small>
               </div>
            </div>
            <div className="skills-div text-center m-3">
               <div>
               <FaNodeJs className="fs-1 icon-two" />
                <small className=" fw-bold block_it">NODEJS</small>
               </div>
            </div>
            <div className="skills-div text-center m-3">
               <div>
               <FaJava className="fs-1 icon-one" />
                <small className=" fw-bold block_it">JAVA</small>
               </div>
            </div>
            <div className="skills-div text-center m-3">
               <div>
               <FaGit className="fs-1 icon-one" />
                <small className=" fw-bold block_it">GIT</small>
               </div>
            </div>
            <div className="skills-div text-center m-3">
               <div>
               <FaGithub className="fs-1" />
                <small className=" fw-bold block_it">Github</small>
               </div>
            </div>
        </div>
    </main>)
}

export default Skills