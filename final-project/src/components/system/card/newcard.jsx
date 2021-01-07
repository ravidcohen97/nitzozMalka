import React, { Component } from "react";
import Joi from "@hapi/joi";
import { toast } from "react-toastify";
import { newCard } from "../../../services/cardServices";
import { getCurrentUser } from "../../../services/userServices";
class Newcard extends Component {
  state = {};
  componentDidMount() {
    let user = getCurrentUser();
    if (!user || !user.admin) return this.props.history.replace("/");
  }

  postCard = async () => {
    let name = document.querySelector(".name");
    let description = document.querySelector(".description");
    let size = document.querySelector(".size");
    let color = document.querySelector(".color");

    const card = {
      name: name.value,
      description: description.value,
      size: size.value,
      color: color.value,
    };

    console.log(card);

    try {
      await this.validCard(card);
    } catch (error) {
      if (error.details) {
        let err = error.details[0].message;
        this.setState({ errors: err });
        return toast(this.state.errors);
      }
    }

    await newCard(card)
      .then((res) => {
        toast(res.data);
        return this.props.history.replace("/cards");
      })
      .catch((err) => {
        if (err) {
          console.log(err.response.data);
        }
      });
  };

  validCard(card) {
    const schema = Joi.object({
      name: Joi.string().min(2).max(35).required(),
      color: Joi.string().min(2).max(1024).required(),
      size: Joi.string().min(1).max(255).required(),
      description: Joi.string().min(2).max(1024),
    });
    return schema.validate(card);
  }
  render() {
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
          <h2>יצירת עבודה</h2>
          <label name="name" style={{ width: "100%" }}>
            שם לקוח
          </label>
          <input type="text" className="name" style={{ width: "100%" }} />
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
          <button
            className="btn btn-success"
            style={{ margin: "10px auto", width: "100px" }}
            onClick={this.postCard}
          >
            צור
          </button>
        </div>
      </div>
    );
  }
}

export default Newcard;
