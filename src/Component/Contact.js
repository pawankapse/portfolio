import React from 'react'
import './Cntact.css'
const Contact = () => {
  return (
    <div className='my-contact'>
      <h1>Contact Me</h1>
      <form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="ea00c6cc-365f-4566-870d-3644e801ab33" />
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" required></textarea>
  
  <button type="submit">Submit</button>
</form>
    </div>
  )
}

export default Contact
