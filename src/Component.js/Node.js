import React from "react";

function Node() {
  return (
    <main className='d-sm-flex row justify-content-between text-center'>
      <a
        className='text-dark text-decoration-none'
        href='https://github.com/olayinkagrace/beebuy'
      >
        <div className='py-2 m-4 react_div'>
          <img
            src='beebuy.jpg'
            alt='pics'
            width='150px'
            className='react_img img-fluid'
          />
          <small className='block fst-italic fw-semibold'>
            NodeJs, React, Mongodb, Redux
          </small>
          <small className='block fw-bolder'>A E-commerce Website</small>
          <small className='block fw-normal'>
            A website where buyers and sellers gather
          </small>
        </div>
      </a>
      <a
        className='text-dark text-decoration-none'
        href='https://github.com/olayinkagrace/travel-diary'
      >
        <div className='py-2 m-4 react_div'>
          <img src='travel.jpg' alt='pics' width='100px' className='react_img img-fluid' />
          <small className='block fst-italic fw-semibold'>
            React, Bootstrap, NodeJs, Mongodb, Redux
          </small>
          <small className='block fw-bolder'>Travel Journal</small>
          <small className='block fw-normal'>
            This web app allow you to document all your travel memories
          </small>
        </div>
      </a>
      <a
        className='text-dark text-decoration-none'
        href='https://github.com/olayinkagrace/slimnatics'
      >
        <div className='py-2 m-4 react_div'>
          <img
            src='slimnatics.jpg'
            alt='pics'
            width='150px'
            className='react_img img-fluid'
          />
          <small className='block fst-italic fw-semibold'>
            React, Boostrap, Nodejs, Mongodb
          </small>
          <small className='block fw-bolder'>Slimnatics</small>
          <small className='block fw-normal'>
            This web app is for people who want to stay fit or for chubby people
            who want to slim down. All your exercise journey can be documented here
          </small>
        </div>
      </a>
    </main>
  );
}

export default Node;
