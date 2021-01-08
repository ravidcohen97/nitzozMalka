import React, { Component } from "react";
import { Link } from "react-router-dom";
import { apiUrl } from "../../../config.json";

class Card extends Component {
  state = {};
  render() {
    let { card, user, deleteCard } = this.props;

    return (
      <div
        className="card"
        style={{
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
          margin: "15px",
          borderRadius: "30px",
          border: "5px solid black",
          padding: "5px",
          boxShadow: "2px 2px 5px white",
        }}
      >
        <h3 style={{ width: "100%", color: "#96090e" }}>
          שם לקוח - {card.name}
        </h3>
        <h5 style={{ width: "100%" }}>תיאור- {card.description} </h5>
        <h5 style={{ width: "100%" }}>מפרט צבע- {card.color} </h5>
        <h5 style={{ width: "100%" }}>גודל-{card.size} </h5>
        {card.status === 0 && (
          <h3 style={{ width: "100%", color: "#fe8c00" }}>
            סטטוס עבודה - בהמתנה
          </h3>
        )}
        {card.status === 1 && (
          <h3 style={{ width: "100%", color: "#e0a449" }}>
            סטטוס עבודה - ניקוי והכנת משטח
          </h3>
        )}
        {card.status === 2 && (
          <h3 style={{ width: "100%", color: "#96090e" }}>
            סטטוס עבודה - צביעה
          </h3>
        )}
        {card.status === 3 && (
          <h3 style={{ width: "100%", color: "#66ccff" }}>
            סטטוס עבודה - ביקורת
          </h3>
        )}
        {card.status === 4 && (
          <h3 style={{ width: "100%", color: "#4174fe" }}>
            סטטוס עבודה -מוכן,ממתין למשלוח
          </h3>
        )}
        {card.status === 5 && (
          <h3 style={{ width: "100%", color: "#41ff66" }}>סטטוס עבודה-נשלח</h3>
        )}

        {user && user.admin && (
          <React.Fragment>
            <h5>
              תאריך קבלת עבודה
              <br /> {card.createAt.replace("T", " ").replace("Z", " ")}
            </h5>
            <p>
              <Link style={{ width: "100px" }} to={`/editcard/${card._id}`}>
                Edit
              </Link>{" "}
              |{" "}
              <Link
                style={{ width: "100px" }}
                onClick={() => deleteCard(card._id)}
                to={"/cards"}
              >
                Delete
              </Link>
            </p>
            <br />
            Client Link:
            <Link to={`/clientcard/${card._id}`}>
              {apiUrl}/clientcard/{card._id}
            </Link>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Card;
