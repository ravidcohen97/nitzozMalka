import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../Image/facebook.png";

const Contact = () => {
  return (
    <div
      className="contacts"
      id="contact"
      style={{
        paddingBottom: "50px",
        marginBottom: "50px",
        height: "100%",
        width: "100vw",
        padding: "5px",
      }}
    >
      <div>
        <h2>צור קשר</h2>
        <br />

        <p>
          חיים מלכה סמנכ"ל
          <br /> טלפון- 0523455584
          <br />
          מייל:{" "}
          {React.createElement(
            "a",
            // eslint-disable-next-line no-useless-concat
            { href: "mailto:" + "nitzoz@gmail.com" },
            "nitzoz@gmail.com"
          )}
          <br />
          כתובת- אזור התעשייה ירוחם , 860000
          <br />
          <Link to="#" target="_blank">
            <img
              src={facebook}
              targ
              alt="facebook"
              style={{ width: "100px", marginTop: "20px" }}
            />
          </Link>
        </p>
        <br />
      </div>

      <iframe
        style={{ maxWidth: "95vw", marginLeft: "10px", border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13681.65370691219!2d34.940384!3d30.9868474!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x84bec8e3943b6e19!2z16DXmdem15XXpSDXntec15vXlCDXkdeiItee!5e0!3m2!1siw!2sil!4v1603386566158!5m2!1siw!2sil"
        width="700"
        height="450"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
        title="map"
      ></iframe>
    </div>
  );
};

export default Contact;
