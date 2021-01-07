import React, { Component } from "react";
import { toast } from "react-toastify";
import { getMycards, updateCard } from "../../../services/cardServices";
import Joi from "@hapi/joi";
import { getCurrentUser } from "../../../services/userServices";
class Editcard extends Component {
  state = { card: "" };

  async componentDidMount() {
    let user = getCurrentUser();
    if (!user || !user.admin) return this.props.history.replace("/");

    let cardId = this.props.match.params.id;

    try {
      let { data } = await getMycards(cardId);
      this.setState({ card: data });
    } catch (err) {
      if (err.response) {
        toast(err.response.data);
      }
    }

    let name = document.querySelector(".name");
    let description = document.querySelector(".description");
    let size = document.querySelector(".size");
    let color = document.querySelector(".color");
    let { card } = this.state;
    name.value = card.name;
    description.value = card.description;
    size.value = card.size;
    color.value = card.color;
  }

  updateCard = async () => {
    let name = document.querySelector(".name");
    let description = document.querySelector(".description");
    let size = document.querySelector(".size");
    let color = document.querySelector(".color");
    let status = document.querySelector("#status");
    let _id = this.state.card._id;

    let newCard = {
      name: name.value,
      description: description.value,
      size: size.value,
      color: color.value,
      status: status.value,
      _id: _id,
    };
    try {
      await this.validCard(newCard);
    } catch (error) {
      if (error.details) {
        let err = error.details[0].message;
        this.setState({ errors: err });
        return toast(this.state.errors);
      }
    }

    try {
      await updateCard(newCard);
      toast("your card is update");
      this.props.history.replace("/cards");
    } catch (err) {
      if (err.response) toast(err.response.data);
    }
  };

  validCard(card) {
    const schema = Joi.object({
      name: Joi.string().min(2).max(35).required(),
      color: Joi.string().min(2).max(1024).required(),
      size: Joi.string().min(1).max(255).required(),
      description: Joi.string().min(2).max(1024),
      status: Joi.number().min(0).max(5).required(),
      _id: Joi.string().required(),
    });
    return schema.validate(card);
  }

  render() {
    let { card } = this.state;

    return (
      <div className="bgc">
        <div
          className="newcard"
          style={{
            width: "100%",
            maxWidth: "300px",
            backgroundColor: "#fff",
            direction: "rtl",
            margin: "10% auto",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h3>עריכת עבודה</h3>
          <label name="name" style={{ width: "100%" }}>
            שם לקוח
          </label>
          <input
            type="text"
            placeholder={card.name}
            className="name"
            style={{ width: "100%" }}
          />
          <label name="description" style={{ width: "100%" }}>
            תיאור עבודה
          </label>
          <textarea
            type="text"
            className="description"
            style={{ width: "100%", height: "50px" }}
          />
          <label name="color" style={{ width: "100%" }}>
            מפרט צבע
          </label>
          <textarea className="color" type="text" style={{ width: "100%" }} />
          <label name="size" style={{ width: "100%" }}>
            משקל/מטראז
          </label>
          <textarea className="size" type="text" style={{ width: "100%" }} />
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

          <select name="status" id="status">
            <option value="0">בהמתנה</option>
            <option value="1">ניקוי והכנת משטח</option>
            <option value="2">צביעה</option>
            <option value="3">ביקורת</option>
            <option value="4">ממתין למשלוח</option>
            <option value="5">נשלח</option>
          </select>

          <button
            className="btn btn-success"
            style={{ margin: "10px", width: "100px" }}
            onClick={this.updateCard}
          >
            עדכן
          </button>
        </div>
      </div>
    );
  }
}

export default Editcard;
