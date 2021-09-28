import BallRolls from '../assets/ballrolls.svg';
import Angle from '../assets/angle.svg';
import Fan from '../assets/fan.svg';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <div className="w-screen md:h-535px bg-footergray dark:bg-kiwi2 relative p-5 md:p-0">
      <img className="md:block hidden absolute left-0" src={BallRolls} alt="Ball Rolls" />
      <img className="md:block hidden absolute left-36 bottom-36" src={Fan} alt="Fan" />
      <img className="md:block hidden absolute right-0" src={Angle} alt="Inverted Angles" />
      <img className="md:block hidden absolute right-32 top-48" src={BallRolls} alt="Ball Rolls" />
      <div className="flex justify-center">
        <div className="md:pt-44 pt-10">
          <h1 className="md:text-6xl text-3xl font-semibold text-gray3 dark:text-gray1"><span className="text-appblue font-bold">Need</span> help with <br /> Adopting a pet?</h1>
          <button type="button" className="bg-appblue text-white text-sm px-10 py-4 rounded-full shadow mt-5 hover:bg-opacity-90">
            View all pets
          </button>

        </div>
      </div>
      <div className="md:flex justify-between items-start md:pt-24 md:pb-0 pb-16 pt-12 md:px-20">
        <Link to="/">
          <Logo />
        </Link>
        <div>
          <div className="flex items-center space-x-5 md:ml-24 pt-5 md:pt-0">
            <a href="s">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.999 0C4.477 0 0 4.50448 0 10.0604C0 15.081 3.656 19.2424 8.437 20V12.9691H5.897V10.0604H8.437V7.84385C8.437 5.32046 9.93 3.92897 12.213 3.92897C13.307 3.92897 14.453 4.12516 14.453 4.12516V6.59926H13.189C11.949 6.59926 11.561 7.37599 11.561 8.17185V10.0584H14.332L13.889 12.9671H11.561V19.998C16.342 19.2444 19.998 15.082 19.998 10.0604C19.998 4.50448 15.521 0 9.999 0Z" fill="#58667E" />
              </svg>
            </a>
            <a href="y">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.375 10C13.375 8.125 11.875 6.625 10 6.625C8.125 6.625 6.625 8.125 6.625 10C6.625 11.875 8.125 13.375 10 13.375C11.875 13.375 13.375 11.875 13.375 10ZM15.125 10C15.125 12.875 12.875 15.125 10 15.125C7.125 15.125 4.875 12.875 4.875 10C4.875 7.125 7.125 4.875 10 4.875C12.875 4.875 15.125 7.125 15.125 10ZM16.5 4.625C16.5 5.375 16 5.875 15.25 5.875C14.5 5.875 14 5.375 14 4.625C14 3.875 14.5 3.375 15.25 3.375C16 3.375 16.5 4 16.5 4.625ZM10 1.75C8.5 1.75 5.375 1.625 4.125 2.125C3.25 2.5 2.5 3.25 2.25 4.125C1.75 5.375 1.875 8.5 1.875 10C1.875 11.5 1.75 14.625 2.25 15.875C2.5 16.75 3.25 17.5 4.125 17.75C5.375 18.25 8.625 18.125 10 18.125C11.375 18.125 14.625 18.25 15.875 17.75C16.75 17.375 17.375 16.75 17.75 15.875C18.25 14.5 18.125 11.375 18.125 10C18.125 8.625 18.25 5.375 17.75 4.125C17.5 3.25 16.75 2.5 15.875 2.25C14.625 1.625 11.5 1.75 10 1.75ZM20 10V14.125C20 15.625 19.5 17.125 18.375 18.375C17.25 19.5 15.75 20 14.125 20H5.875C4.375 20 2.875 19.5 1.625 18.375C0.625 17.25 0 15.75 0 14.125V10V5.875C0 4.25 0.625 2.75 1.625 1.625C2.875 0.625 4.375 0 5.875 0H14.125C15.625 0 17.125 0.5 18.375 1.625C19.375 2.75 20 4.25 20 5.875V10Z" fill="#58667E" />
              </svg>
            </a>
            <a href="s">
              <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M24 2.31165C23.1014 2.70992 22.1481 2.97116 21.172 3.08665C22.2001 2.47127 22.9696 1.50317 23.337 0.362648C22.3704 0.936564 21.3129 1.34105 20.21 1.55865C19.4686 0.766921 18.4866 0.242089 17.4164 0.0656229C16.3462 -0.110843 15.2476 0.0709271 14.2913 0.582718C13.335 1.09451 12.5743 1.90769 12.1275 2.89603C11.6806 3.88437 11.5725 4.99259 11.82 6.04865C9.862 5.9508 7.9465 5.44205 6.19798 4.55547C4.44946 3.66889 2.90706 2.42433 1.671 0.902648C1.23291 1.65418 1.0027 2.50875 1.004 3.37865C1.004 5.08665 1.873 6.59465 3.195 7.47765C2.41311 7.45234 1.64842 7.24155 0.964 6.86265V6.92265C0.963848 8.05979 1.35713 9.16197 2.0771 10.0422C2.79707 10.9224 3.7994 11.5263 4.914 11.7516C4.18866 11.9479 3.42821 11.977 2.69 11.8366C3.0046 12.8151 3.61711 13.6707 4.44188 14.2839C5.26665 14.8971 6.26244 15.2372 7.29 15.2566C5.54557 16.6248 3.39192 17.3668 1.175 17.3636C0.777 17.3636 0.385 17.3406 0 17.2956C2.25163 18.742 4.87187 19.5098 7.548 19.5076C16.605 19.5076 21.557 12.0046 21.557 5.49765C21.557 5.28465 21.552 5.07265 21.543 4.86165C22.507 4.16438 23.339 3.30088 24 2.31165Z" fill="#58667E" />
              </svg>
            </a>
            <a href="s">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 0C4.92479 0 0 4.92479 0 11C0 17.0752 4.92479 22 11 22C17.0752 22 22 17.0752 22 11C22 4.92479 17.0752 0 11 0ZM8.30729 15.5593H6.07979V8.39094H8.30729V15.5593ZM7.17979 7.51094C6.47625 7.51094 6.02135 7.0125 6.02135 6.39604C6.02135 5.76698 6.49 5.28344 7.20844 5.28344C7.92687 5.28344 8.36687 5.76698 8.38062 6.39604C8.38062 7.0125 7.92687 7.51094 7.17979 7.51094ZM16.4427 15.5593H14.2152V11.5867C14.2152 10.662 13.8921 10.0341 13.0866 10.0341C12.4712 10.0341 12.1057 10.4592 11.9442 10.8682C11.8846 11.0138 11.8697 11.22 11.8697 11.4251V15.5581H9.64104V10.6769C9.64104 9.78198 9.6124 9.03375 9.5826 8.38979H11.5179L11.6199 9.38552H11.6646C11.9579 8.91802 12.6764 8.22823 13.8783 8.22823C15.3439 8.22823 16.4427 9.21021 16.4427 11.3208V15.5593Z" fill="#58667E" />
              </svg>
            </a>
          </div>
          <p className="text-sm font-medium text-footergray2 pt-5">Copyright © 2021 Petly. All rights reserved.</p>
        </div>
        <span className="flex space-x-4 items-center">
          <a className="text-footergray2 hover:text-appblue" href="terms">Terms of use</a>
          <a className="text-footergray2 hover:text-appblue" href="terms">Privacy Policy</a>
        </span>
      </div>
    </div>
  )
}

export default Footer;
