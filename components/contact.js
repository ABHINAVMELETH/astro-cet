import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbw234eavqkgyvFEnrWfEThCeDSRireTWIAzPx1f7nZ-tqyC5uSv-tQYNOWdFEh6FXLi/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById('msg');

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(scriptURL, {
          method: 'POST',
          body: new FormData(form),
        });
        console.log('Success!', response);
        const data = await response.json();
        console.log('Response data:', data);
        msg.innerHTML = 'Thank You For Subscribing';
        setTimeout(() => {
          msg.innerHTML = '';
        }, 5000);
      } catch (error) {
        console.error('Error!', error.message);
      }
    };

    form.addEventListener('submit', handleSubmit);

    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, []);

  return (
    <footer id="contactus" className="bg-black py-8 relative z-10 text-white">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold">CONTACT US</h3>
        <div className="flex justify-center space-x-4 sm:space-x-8 pt-5 pb-6">
          <a href="https://www.linkedin.com/company/astrocet/mycompany/" className="text-white text-xl"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://www.instagram.com/astro.cet/" className="text-white text-xl"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className="text-center items-center mb-6 px-4">
        <form
          name="submit-to-google-sheet"
          className="bg-white flex  sm:flex-row items-center mx-auto max-w-md sm:max-w-lg"
        >
          <input
            type="email"
            name="email"
            className="border-none outline-none px-4 py-2 w-full sm:flex-grow"
            placeholder="Enter your email to subscribe"
          />
          <button
            type="submit"
            className="bg-purple-700 text-white px-4 py-2 mt-4 sm:mt-0 sm:ml-2 flex items-center justify-center mb-2 mr-2 sm:mt-2"
          >
            <img src="/images/send-icon.png" width="30px" alt="Send" />
          </button>
        </form>
        <span id="msg" className="text-pink-500 mt-4 block"></span>
      </div>
      <div className="text-center mt-6">
        <p className="text-xs">Made by AstroCET. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Contact;
