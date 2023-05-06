
import 'bootstrap/dist/css/bootstrap.min.css';
function Contact(params) {
    return(
        <main className='py-5 container w-75'>
            <h4 className="fw-bolder fs-4 py-2">Contact Me</h4>
            <form action="mailto:olayinka4grace@gmail.com" method='post' encType='text/plain'>
                <label className='fw-semibold fs-6'>NAME</label>
                <input type='text' className='form-control' placeholder='Name' />
                <label  className='fw-semibold'>EMAIL</label>
                <input type="email" className='form-control' placeholder='Email' />
                <label  className='fw-semibold'>PHONE NUMBER</label>
                <input className='form-control' placeholder='Phone Number' />
                <label  className='fw-semibold'>YOUR MESSAGE</label>
                <textarea type="textarea" className='form-control' placeholder='Please leave a message...' />
                <button className='contact-btn py-2 y my-3'>Send It</button>
            </form>
        </main>
    )
}

export default Contact