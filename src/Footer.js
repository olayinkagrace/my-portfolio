import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

function Footer(params) {
  return (
    <div className='copywrite py-2'>
      <div className='d-flex justify-content-between py-2'>
        <div className='m-3 footer-icon'>
          <a href='https://github.com/olayinkagrace'>
            <FaGithub className='fs-2 text-dark' />
          </a>
        </div>
        <div className='m-3 footer-icon'>
          <a href='https://www.linkedin.com/in/olayinka-grace-7031b3200'>
            <FaLinkedinIn className='fs-3 icon-five text-primary bg-light' />
          </a>
        </div>
        <div className='m-3 footer-icon'>
          <a href='https://twitter.com/BunmeeTreats?t=1SJPkguLEgC40lpAYzywMQ&s=09'>
            <FaTwitter className='fs-2 text-info' />
          </a>
        </div>
      </div>
      <div className='p-2 pt-5 text-light text-center'>
        &#169; All right reserved-Olayinka Grace Okanlawon
      </div>
    </div>
  );
}

export default Footer;
