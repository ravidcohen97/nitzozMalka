import React, { Component } from "react";
import { toast } from "react-toastify";
import { getMycards } from "../../../services/cardServices";
import Logo from "../../../Image/logo.png";

class Clientcard extends Component {
  state = { card: "" };

  async componentDidMount() {
    let cardId = this.props.match.params.id;

    try {
      let { data } = await getMycards(cardId);
      this.setState({ card: data });
    } catch (err) {
      if (err.response) {
        toast(err.response.data);
      }
    }
  }

  render() {
    let { card } = this.state;

    return (
      <div className="bgc">
        {card && (
          <div
            className="newcard"
            style={{
              width: "100%",
              maxWidth: "500px",
              backgroundColor: "#fff",
              direction: "rtl",
              margin: "5% auto",
              padding: "10px 25px 20px 25px",
              textAlign: "center",
              border: "5px solid black",
              boxShadow: "2px 2px 10px white",
              borderRadius: "30px",
            }}
          >
            <h2>ברוך הבא {card.name}</h2>

            <h5 style={{ width: "100%" }}>תיאור עבודה</h5>
            <p style={{ width: "100%" }}>{card.description} </p>

            <h5 name="color" style={{ width: "100%" }}>
              מפרט צבע
            </h5>
            <p style={{ width: "100%" }}>{card.color} </p>

            <h5 name="size" style={{ width: "100%" }}>
              משקל/מטראז
            </h5>
            <p style={{ width: "100%" }}>{card.size} </p>
            {card.status === 0 && (
              <h4 style={{ width: "100%", color: "#fe8c00" }}>
                סטטוס נוכחי - בהמתנה
              </h4>
            )}
            {card.status === 1 && (
              <h3 style={{ width: "100%", color: "#e0a449" }}>
                סטטוס נוכחי - ניקוי והכנת משטח
              </h3>
            )}
            {card.status === 2 && (
              <h3 style={{ width: "100%", color: "#96090e" }}>
                סטטוס נוכחי - צביעה
              </h3>
            )}
            {card.status === 3 && (
              <h3 style={{ width: "100%", color: "#66ccff" }}>
                סטטוס נוכחי - ביקורת
              </h3>
            )}
            {card.status === 4 && (
              <h3 style={{ width: "100%", color: "#4174fe" }}>
                סטטוס נוכחי -מוכן,ממתין למשלוח
              </h3>
            )}
            {card.status === 5 && (
              <h3 style={{ width: "100%", color: "#41ff66" }}>
                סטטוס נוכחי-נשלח
              </h3>
            )}

            <img src={Logo} alt="logo" style={{ width: "100%" }} />
          </div>
        )}

        {!card && <h1>Loading...</h1>}
      </div>
    );
  }
}

export default Clientcard;
