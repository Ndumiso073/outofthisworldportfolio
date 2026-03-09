import React from 'react';

const AstronautSocialCard = () => {
  return (
    <div className="card">
      <img
        src="https://uiverse.io/astronaut.png"
        alt=""
        className="image"
      />
      <div className="heading">Connect With Me</div>
      <div className="icons">
        <a href="https://www.facebook.com/ndumisoh.cbongakonke" className="instagram" target="_blank" rel="noopener noreferrer">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </a>
        <a href="https://wa.me/+27699364744" className="x" target="_blank" rel="noopener noreferrer">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 21l1.65-6.03A9 9 0 1 1 20.95 13a9 9 0 0 1-9 8.97L3 21zm7.5-12.5a2.5 2.5 0 0 1 2.5 2.5c0 .44-.11.85-.31 1.21l-.31.48c-.2.3-.4.6-.6.9-.2.3-.2.6-.2.9 0 .6.2 1.1.6 1.5.4.4.9.6 1.5.6.6 0 1.1-.2 1.5-.6.4-.4.6-.9.6-1.5 0-.3 0-.6-.2-.9-.2-.3-.4-.6-.6-.9l-.31-.48c-.2-.36-.31-.77-.31-1.21a2.5 2.5 0 0 1 2.5-2.5z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/thaddeus-ndumiso-mndaweni-41635b345/" className="discord" target="_blank" rel="noopener noreferrer">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default AstronautSocialCard;
