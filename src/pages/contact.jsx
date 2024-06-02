import React from 'react';
import Header from "../components/header";
import Menu from "../components/menu";
import Aside from "../components/aside";
import Footer from "../components/footer";

const Contact = () => {
    return (
        <>
        <Header />
        <Menu />
        <div className="row">
          <Aside />
          <div className="col-sm-8">
              <h1>CONTACTO</h1>
              <a href='https://github.com/davidG199' target='_blank' className='btn btn-primary'>Github</a>
          </div>
        </div>
        <Footer />
      </>
    );
}

export default Contact;
