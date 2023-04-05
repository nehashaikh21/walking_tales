import { useState } from "react";
import { send } from 'emailjs-com';
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
  const [sender_name, set_sender_name] = useState('');
  const [sender_email, set_sender_email] = useState('');
  const [message, set_message] = useState('');

  const handleName = (e) => {
    set_sender_name(e.target.value)
  }


  const handleEmail = (e) => {
    set_sender_email(e.target.value)
  }

  const handlemessage = (e) => {
    set_message(e.target.value)
  }

  const sendMail = (e) => {
    e.preventDefault();
    send(
      'service_4bm52mf',
      'template_f1dfq1l',
      { sender_name, sender_email, message },
      'hv0P0yt8BmoP5RYe0'
    )

      .then((response) => {
        console.log('Message sent successfully', response.status, response.text)
      })
      .catch((err) => {
        console.log('Failed', err)
      })
    set_sender_name('');
    set_sender_email('');
    set_message('');

  }

  return (
    <>
      <Header />

      <div className="container py-3">
        <div className="container py-5 h-100" >
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-8">
              <div className="card rounded-3">
                <img className="w-100" class="rounded" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                  alt="Sample photo"/>

                <div className="card-body p-4 p-md-5">
                  {/* <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Contact us</h3> */}
                  <h4> Share your journey with us</h4>

                  <form id="contactform" className="px-md-2 contactform" onSubmit={sendMail}>

                    <div className="form-outline mb-4">
                      <label className="form-label" >Name&nbsp;</label>
                      <input type="text" name="sender_name" value={sender_name} onChange={handleName} required placeholder=" your name" />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" >Email&nbsp;&nbsp;</label>
                      <input type="text" name="sender_email" value={sender_email} onChange={handleEmail} required placeholder=" your email " />
                    </div>


                    <div className="col-md-6 mb-4"><label className="form-label" >Gender&nbsp;</label>
                    <select className="select">
                        <option value="1" disabled>Gender</option>
                        <option value="2">Female</option>
                        <option value="3">Male</option>
                        <option value="4">Don't wish to specify</option>
                      </select>
                   </div>

                    <div className="col-md-9 pe-5">
                      <label className="form-label" >Message</label>
                      <textarea value={message} onChange={handlemessage} required placeholder="your message" className="form-control" rows="3" />
                    </div>

                    <div className="d-flex justify-content-center">
                      <button type="submit"
                        className="btn btn-success my-4 text-bg-success ">Send</button>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact;


