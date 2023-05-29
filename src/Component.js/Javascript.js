import React from "react";

function Javascript(params) {
   return(
    <main className="d-sm-flex row justify-content-between text-center">
        <a className="text-dark text-decoration-none" href="https://theblackjackgamebyog.netlify.app/"><div className="py-2 m-4 react_div">
        <img src="blackjack.png" alt="pics" width="150px" className="react_img img-fluid" />
        <small className="block fst-italic fw-semibold">Javascript, CSS & Html</small>
        <small className="block fw-bolder">Black Jack Game</small>
        <small className="block fw-normal">A casino inspired game.</small>
        </div></a>

        <a className="text-dark text-decoration-none" href="https://finance-logger-5hr4.onrender.com"><div className="py-2 m-4 react_div">
        <img src="logger.png" alt="pics" width="150px" className="react_img img-fluid" />
        <small className="block fst-italic fw-semibold">Typescript, CSS & Html</small>
        <small className="block fw-bolder">Payment Logger</small>
        <small className="block fw-normal">A basic form where payments or invoice can be logged</small>
        </div></a>

        {/* <div className="py-2 m-4 react_div">
        <img src="stopwatch.png" alt="pics" width="150px" className="react_img img-fluid" />
        <small className="block fst-italic fw-semibold">Javascript, CSS & Html</small>
        <small className="block fw-bolder">Stopwatch</small>
        <small className="block fw-normal">A timepiece designed to measure the amount of time between its activation and deactivation.</small>
        </div> */}
        <a className="text-dark text-decoration-none" href="https://ogcalendar.netlify.app/"><div className="py-2 m-4 react_div">
        <img src="calender.png" alt="pics" width="150px" className="react_img img-fluid" />
        <small className="block fst-italic fw-semibold">Javascript, CSS & Html</small>
        <small className="block fw-bolder">Calendar</small>
        <small className="block fw-normal">A system of organizing days.</small>
        </div></a>
        <a className="text-dark text-decoration-none" href="https://olayinkascalculator.netlify.app/"><div className="py-2 m-4 react_div">
        <img src="calculator.png" alt="pics" width="150px" className="react_img img-fluid" />
        <small className="block fst-italic fw-semibold">Javascript, CSS & Html</small>
        <small className="block fw-bolder">Calculator</small>
        <small className="block fw-normal">A calculating tool for every business.</small>
        </div></a>
    </main>
   ) 
}

export default Javascript