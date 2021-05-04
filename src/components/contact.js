import React from 'react';

const Contact = ()=> {
   
      return (
        <>
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Michael Swigart's portfolio</title>
          <section className="container background-image">
            {/* Content here */}
            <div className="row">
              <div className="float-start">
                <h1 className="display-4">Contact</h1>
              </div>
            </div> 
            <form>
              <div className=" form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputName4">Name</label>
                  <input type="text" className="form-control" id="inputName4" name="Name" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail4">Email</label>
                  <input type="email" className="form-control" id="inputPassword4" placeholder="Email" />
                </div>
              </div>
              <div className="form-group col-sm-12">
                <label htmlFor="exampleFormControlMessage1">Message</label>
                <textarea className="form-control" id="Message" rows={3} defaultValue={""} /> <button className="btn btn-primary " type="submit">Send</button>
              </div></form>
            <div className="card offset-2" style={{width: '30rem', backgroundColor: '#343a'}}>
              <div className="card-body">
                <h3>Contact me</h3>
                <img src="https://img.icons8.com/material-two-tone/24/000000/phone--v1.png" width={70} height={70}alt="" />:<p> 620-491-1827</p> <br />
                <img src="https://img.icons8.com/doodle/48/000000/email--v1.png"  width={70} height={70} alt="" />
                <h3>Find me on social media!</h3>
                <a href="https://github.com/Michaelswigart">
                  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={70} height={70} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/michael-swigart-984490205/"> <img src="https://img.icons8.com/clouds/100/000000/linkedin.png" width={70} height={70} alt="" /> </a>
                <br /> 
                <a href="Resume.pdf" download>Download my Resume</a>
              </div>
            </div>
          </section>
        </div>
     </> 
    );
    
  };

  export default Contact;