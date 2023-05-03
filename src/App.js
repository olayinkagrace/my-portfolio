import 'bootstrap/dist/css/bootstrap.min.css';
import {FaPhone, FaMailBulk} from "react-icons/fa"
import {init} from 'ityped'
import React from 'react';
import Projects from './Project';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';



function App(params) {
const textRef = React.useRef()
React.useEffect(() => {
    init(textRef.current,
         { 
            showCursor: true,
            backDelay:2000,
            strings: ['Developer', 'Freelancer', 'Content Creator' ] })
}, [])

    return(
        <main>
            <section className='section_one d-flex justify-content-between p-3'>
                <div className='d-flex align-items-center justify-content-between'>
                    <FaPhone className='phone'/>
                    <small className='fw-semibold ms-1'>+2348103373628</small>
                </div>
                <div >
                    <FaMailBulk />
                    <small className='fw-semibold ms-1'>olayinka4grace@gmail.com</small>
                </div>
            </section>
            <section className='text-center section-two py-5'>
                <div>
                    <img src="./olayinka.jpg" alt="pics" className="img-fluid my_img" />
                </div>
                <div className='ms-4 mt-5'>
                    <small className='fw-semibold fs-6'>Hi There, I am </small>
                    <p className='fw-bold fs-3 '>Olayinka Okanlawon</p>
                    <small className='fw-bold fs-5 '>A  <span ref={textRef} className='span'></span></small>
                </div>
            </section>
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </main>
    )
}
export default App                              