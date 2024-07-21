import React from "react";
import Header from "../components/contact-us/Header";
import ContactForm from "../components/contact-us/ContactForm";
import ContactDetails from "../components/contact-us/ContactDetails";
import Footer from "../components/about/Footer";
import "../Styles/contactUs.css";
import '@fortawesome/fontawesome-svg-core/styles.css';

    const App = () => {
      return (
        <div>
          <Header />
          <div className="main-content">
            <ContactForm />
            <ContactDetails />
          </div>
          <Footer />
        </div>
      );
    };


    export default App;
