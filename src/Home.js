import React from "react";
import { init } from "ityped";

function Home() {
  const textRef = React.useRef();
  React.useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 2000,
      strings: ["Developer", "Freelancer", "Content Creator"],
    });
  }, []);
  return (
    <section className='text-center section-two py-5'>
      <div>
        <img src='./olayinka.jpg' alt='pics' className='img-fluid my_img' />
      </div>
      <div className='ms-4 mt-5'>
        <small className='fw-semibold fs-6'>Hi There, I am </small>
        <p className='fw-bold fs-3 '>Olayinka Okanlawon</p>
        <small className='fw-bold fs-5 '>
          A <span ref={textRef} className='span'></span>
        </small>
      </div>
    </section>
  );
}

export default Home;
