import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaHtml5,
  FaMapMarked,
  FaCss3,
  FaBootstrap,
  FaJs,
  FaReact,
  FaJava,
  FaJsSquare,
  FaGit,
  FaGithub,
  FaNodeJs,
  FaLeaf,
  FaDatabase,
} from "react-icons/fa";
import { Row } from "react-bootstrap";

function Skills(params) {
  return (
    <main className='text-center container py-5 my-2'>
      <h4 className='fw-bolder fs-4 py-2'>Skills</h4>
      <Row className='align-items-center ms-2'>
        <div className='skills-div text-center  m-3'>
          <div className='align-items-center text-center'>
            <FaHtml5 className='fs-1 icon-one' />
            <small className=' fw-bold block_it'>HTML</small>
          </div>
        </div>
        <div className='skills-div text-center  m-3'>
          <div className='align-items-center text-center'>
            <FaMapMarked className='fs-1 icon-eight' />
            <small className=' fw-bold block_it'>MUI</small>
          </div>
        </div>
        <div className='skills-div text-center m-3'>
          <div>
            <FaCss3 className='fs-1 icon-five' />
            <small className=' fw-bold block_it'>CSS</small>
          </div>
        </div>
        <div className='skills-div text-center m-3'>
          <div>
            <FaBootstrap className='fs-1 icon-four' />
            <small className=' fw-bold block_it'>Bootstrap</small>
          </div>
        </div>
        <div className='skills-div text-center m-3'>
          <div>
            <FaJs className='fs-1 icon-three' />
            <small className=' fw-bold block_it'>JS</small>
          </div>
        </div>
        <div className='skills-div text-center m-3'>
          <div>
            <FaReact className='fs-1 bg-info' />
            <small className=' fw-bold block_it'>REACT</small>
          </div>
        </div>
        <div className='skills-div text-center m-3'>
          <div>
            <FaNodeJs className='fs-1 icon-two' />
            <small className=' fw-bold block_it'>NODE JS</small>
          </div>
        </div>
        <div className='skills-div text-center m-3'>
          <div>
            <FaDatabase className='fs-1 icon-eight' />
            <small className=' fw-bold block_it'>POSTGRE SQL</small>
          </div>
        </div>
        <div className='skills-div text-center m-3'>
          <div>
            <FaLeaf className='fs-1 icon-six' />
            <small className=' fw-bold block_it'>MONGO DB</small>
          </div>
        </div>
        <div className='skills-div text-center m-3'>
          <div>
            <FaJs className='fs-1 icon-two' />
            <small className=' fw-bold block_it'>EXPRESS JS</small>
          </div>
        </div>
        <div className='skills-div text-center m-3'>
          <div>
            <FaDatabase className='fs-1 icon-eight' />
            <small className=' fw-bold block_it'>SQL</small>
          </div>
        </div>
        <div className='skills-div text-center m-3'>
          <div>
            <FaDatabase className='fs-1 icon-one' />
            <small className=' fw-bold block_it'>MS SQL</small>
          </div>
        </div>
        <div className='skills-div text-center m-3'>
          <div>
            <FaJsSquare className='fs-1 icon-eight' />
            <small className=' fw-bold block_it'>TS</small>
          </div>
        </div>
        <div className='skills-div text-center m-3'>
          <div>
            <FaJava className='fs-1 icon-one' />
            <small className=' fw-bold block_it'>JAVA</small>
          </div>
        </div>
        <div className='skills-div text-center m-3'>
          <div>
            <FaLeaf className='fs-1 icon-seven' />
            <small className=' fw-bold block_it'>SPRING</small>
          </div>
        </div>
        <div className='skills-div text-center m-3'>
          <div>
            <FaGit className='fs-1 icon-one' />
            <small className=' fw-bold block_it'>GIT</small>
          </div>
        </div>
        <div className='skills-div text-center m-3'>
          <div>
            <FaGithub className='fs-1' />
            <small className=' fw-bold block_it'>Github</small>
          </div>
        </div>
      </Row>
    </main>
  );
}

export default Skills;
