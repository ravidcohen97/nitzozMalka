import React, { Component } from "react";
import Slide1 from "../../Image/slid1.jpg";
import Slide2 from "../../Image/slid2.jpg";
import Slide3 from "../../Image/slid3.jpg";
import facebook from "../../Image/facebook.png";
import Gallery from "./tools/gallery";
import { Link } from "react-router-dom";

class Index extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="SliderMain" id="home">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div
              className="carousel-inner"
              style={{ width: "100%", height: "40vh", zIndex: 1 }}
            >
              <div
                className="carousel-item active"
                style={{ width: "100%", height: "100%" }}
              >
                <img
                  src={Slide1}
                  className=""
                  alt="slider1"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div
                className="carousel-item"
                style={{ width: "100%", height: "100%" }}
              >
                <img
                  src={Slide2}
                  className=""
                  alt="slider2"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div
                className="carousel-item"
                style={{ width: "100%", height: "100%" }}
              >
                <img
                  src={Slide3}
                  className=""
                  alt="slider3"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

        <hr />

        <section className="home mt-4" style={{ textAlign: "center" }}>
          <h1 style={{ color: "#96090e", marginBottom: "15px" }}>
            ניצוץ מלכה בע"מ - פתרונות צבע לתעשייה
          </h1>
          <p>
            זה לא משנה איזה צביעה אתם מחפשים או הכנת משטח וניקוי בגרגרים,
            כשנכנסתם אלינו מצאתם אותו
            <br /> חברת ניצוץ מלכה בע"מ מספקת שירותי צבע לתעשייה ברמה הגבוהה
            ביותר בשוק הישראלי <br /> החברה מתעסקת למעלה מ 30 שנים במתן פתרונות
            צבע כיסויים וציפויים אפוקסים לתעשייה
          </p>
        </section>
        <hr />
        <section className="services" id="service">
          <h2
            className="mt-3 mb-3"
            style={{ textAlign: "center", color: "#96090e" }}
          >
            השירותים שלנו
          </h2>
          <div className="flex">
            <div className="box1">
              <h3>ניקוי בהתזה</h3>
              <p>
                ניקוי בהתזה הינו חלק מהכנת המשטח לפני צביעה או השמה של כיסוי
                אחר, חברתנו מבצעת ניקוי בהתזת גרגירי פלדה מסוגים שונים לטובת
                מטרות שונות ניקוי חספוס ועוד
              </p>
            </div>
            <div className="box1">
              <h3>צביעה רטובה</h3>
              <p>
                חברתנו מבצעת צביעה רטובה במגוון שיטות לביצוע השמה של הצבע בצורה
                הטובה ביותר על המשטח בהתאם לבקשת הלקוח
              </p>
            </div>
            <div className="box1">
              <h3>טיח מעכב בעירה</h3>
              <p>
                חברתנו מיישמת טיח מעכב בעירה צלולוזי או הידרוקרבון לפי דרישת
                וצורכי הלקוח נשמח לייעץ בנושא ולתת מענה לשאלות והשיקולים השונים
              </p>
            </div>
            <div className="box1">
              <h3>צבע מעכב בעירה</h3>
              <p>
                חברתנו מיישמת צבע מעכב בעירה צלולוזי או הידרוקרבון לפי דרישת
                וצורכי הלקוח נשמח לייעץ ולתת מענה לשאלות והשיקולים השונים
              </p>
            </div>
            <div className="box1">
              <h3>ציפויים אפוקסים</h3>
              <p>
                חברתנו מיישמת ציפויים אפוקסים שונים בהתאם לצורך ולדרישת הלקוח,
                חברתנו ממוקצעת בביצוע השמה של כלל הציפויים השונים בהתאם לצרכי
                ודרישות הלקוח נשמח לייעץ ולתת מענה לשאלות והשיקולים השוניפ
              </p>
            </div>
          </div>
        </section>
        <hr />
        <section className="gallery" id="gallery">
          <h2>קצת חוויות</h2>
          <div className="flex">
            <Gallery image={Slide3} />
            <Gallery image={Slide2} />
            <Gallery image={Slide1} />
            <Gallery image={Slide1} />
          </div>
        </section>
        <hr />
        <section
          className="about mt-4"
          style={{
            textAlign: "center",
            maxWidth: "700px",
            margin: "30px auto",
          }}
          id="about"
        >
          <h2 style={{ color: "#96090e" }}>אודות ניצוץ מלכה</h2>
          <p>
            החברה נוסדה בשנת 1996, מובילה בצביעה תעשייתית בניקוי פני השטח, הכנה
            ויישום של ציפויי מגן, מפעלינו ממוקם באזור התעשייה ירוחם
            <br />
            החברה עוסקת בניקוי בהתזה וצביעה תעשייתית מעל 40 שנים במהלך שנים אלו,
            חברתנו משמשת כקבלן צבע לכל הפרויקטים של מפעלי "ברנד תעשיות בע"מ"
            למפעלינו יש אנשי מקצוע, ידע וציוד טכנולוגי מתקדם ביותר, וכן מערך
            לוגיסטי המאפשר ביצוע מהיר ויעיל של כלל עבודות צביעה תעשייתית נשמח
            לערוך ללקוחות הפוטנציאליים סיור על מנת שתוכלו להתרשם מפעילות המפעל
          </p>
        </section>
        <hr />

        <div className="contacts" id="contact">
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
                  alt="facebook"
                  style={{ width: "100px", marginTop: "20px" }}
                />
              </Link>
            </p>
            <br />
          </div>

          <iframe
            style={{
              maxWidth: "95vw",
              marginLeft: "10px",
              border: 0,
              paddingBottom: "50px",
            }}
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
      </React.Fragment>
    );
  }
}

export default Index;
