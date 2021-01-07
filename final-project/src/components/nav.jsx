import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../Image/logo.png";
import Favorite from "../Image/favorite.png";

class Nav extends Component {
  state = {};
  render() {
    let { user } = this.props;
    // console.log(user);
    return (
      <React.Fragment>
        {!user && (
          <nav
            className="navbar navbar-expand-lg navbar-light bg-light"
            style={{ maxHeight: "110px", zIndex: 5000 }}
          >
            <Link className="navbar-brand" style={{ width: "50%" }} to="/login">
              <img
                src={Logo}
                style={{ width: "100%", maxHeight: "80px", maxWidth: "340px" }}
                alt="logo"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarTogglerDemo02"
              style={{
                direction: "rtl",
                margin: "0 0",
                fontSize: "1.6em",
                textAlign: "right",
                color: "#96090e",
              }}
            >
              <ul
                className="navbar-nav ml-auto mt-2 mt-lg-0"
                style={{
                  backgroundColor: "#fff",
                  maxWidth: "650px",
                  padding: "10px",
                }}
              >
                <li className="nav-item active">
                  <Link
                    className="nav-link"
                    to="/"
                    style={{
                      width: "110px",
                      color: "#96090e",
                      marginLeft: "10px",
                      borderBottom: "1px solid #96090e",
                    }}
                  >
                    דף הבית <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/service"
                    style={{
                      width: "110px",
                      color: "#96090e",
                      borderBottom: "1px solid #96090e",
                      marginLeft: "10px",
                    }}
                  >
                    שירותים
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/gallery"
                    style={{
                      width: "110px",
                      color: "#96090e",
                      borderBottom: "1px solid #96090e",
                      marginLeft: "10px",
                    }}
                  >
                    גלריה
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/about"
                    style={{
                      width: "110px",
                      color: "#96090e",
                      borderBottom: "1px solid #96090e",
                      marginLeft: "10px",
                    }}
                  >
                    אודות
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/contact"
                    style={{
                      width: "115px",
                      color: "#96090e",
                      borderBottom: "1px solid #96090e",
                      marginLeft: "10px",
                    }}
                  >
                    צור קשר
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        )}
        {/* ##########################################################################################**NavForLoginUser##########################################################################  */}

        {user && (
          <nav
            className="navbar navbar-expand-lg navbar-light bg-light"
            style={{ maxHeight: "110px", zIndex: 5000 }}
          >
            <Link className="navbar-brand" style={{ width: "50%" }} to="/login">
              <img
                src={Logo}
                style={{ width: "100%", maxHeight: "80px", maxWidth: "320px" }}
                alt="logo"
              />
            </Link>
            <Link
              className=""
              to="/favorite"
              style={{
                width: "110px",
                height: "50px",
                color: "#96090e",
                marginLeft: "10px",
                position: "fixed",
                bottom: 70,
                left: 10,
              }}
            >
              <img
                src={Favorite}
                alt="favorite"
                style={{
                  width: "70px",
                  padding: "5px",
                }}
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarTogglerDemo02"
              style={{
                direction: "rtl",
                margin: "0 0",
                fontSize: "1.6em",
                textAlign: "right",
                color: "#96090e",
              }}
            >
              <ul
                className="navbar-nav ml-auto mt-2 mt-lg-0"
                style={{
                  backgroundColor: "#fff",
                  maxWidth: "650px",
                  padding: "10px",
                }}
              >
                <li className="nav-item active">
                  <Link
                    className="nav-link"
                    to="/"
                    style={{
                      width: "110px",
                      color: "#96090e",
                      marginLeft: "10px",
                      borderBottom: "1px solid #96090e",
                    }}
                  >
                    דף הבית <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/cards"
                    style={{
                      width: "110px",
                      color: "#96090e",
                      borderBottom: "1px solid #96090e",
                      marginLeft: "10px",
                    }}
                  >
                    עבודות
                  </Link>
                </li>
                {user && !user.admin && (
                  <React.Fragment>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/myuser"
                        style={{
                          width: "110px",
                          color: "#96090e",
                          borderBottom: "1px solid #96090e",
                          marginLeft: "10px",
                        }}
                      >
                        פרופיל
                      </Link>
                    </li>
                  </React.Fragment>
                )}

                {user.admin && (
                  <React.Fragment>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/todos"
                        style={{
                          width: "110px",
                          color: "#96090e",
                          borderBottom: "1px solid #96090e",
                          marginLeft: "10px",
                        }}
                      >
                        משימות
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/users"
                        style={{
                          width: "130px",
                          color: "#96090e",
                          borderBottom: "1px solid #96090e",
                          marginLeft: "10px",
                        }}
                      >
                        משתמשים
                      </Link>
                    </li>
                  </React.Fragment>
                )}

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/logout"
                    style={{
                      width: "110px",
                      color: "#96090e",
                      borderBottom: "1px solid #96090e",
                      marginLeft: "10px",
                    }}
                  >
                    התנתק
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        )}
      </React.Fragment>
    );
  }
}

export default Nav;
