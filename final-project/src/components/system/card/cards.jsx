import React, { Component } from "react";
import Card from "./card";
import { deleteCard, gelAllCards } from "../../../services/cardServices";
import { getCurrentUser } from "../../../services/userServices";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

class Cards extends Component {
  state = { cards: [], user: "", searchField: "" };

  async componentDidMount() {
    let user = getCurrentUser();
    if (!user || !user.admin) return this.props.history.replace("/");
    this.setState({ user });

    try {
      let { data } = await gelAllCards();
      this.setState({ cards: data });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      }
    }
  }

  // searchChange
  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  RemoveCard = async (cardId) => {
    try {
      await deleteCard(cardId);
      toast("Your Card is removed");
    } catch (error) {
      if (error.response) console.log(error.response.data);
    }
    let cards = this.state.cards.filter((card) => {
      return card._id !== cardId;
    });
    this.setState({ cards });
  };

  render() {
    let { user } = this.state;
    // search
    let filterCards = this.state.cards.filter((card) => {
      return card.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className="bgc" style={{ textAlign: "center" }}>
        <Link
          className="btn btn-primary"
          to="/newcard"
          style={{ margin: "10px", position: "fixed", left: 10, top: 120 }}
        >
          + עבודה חדשה
        </Link>
        <h1
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: "3.5em",
            textShadow: "5px 5px black",
          }}
        >
          עבודות
        </h1>
        <input
          type="text"
          placeholder="חיפוש לפי שם לקוח"
          onChange={this.onSearchChange}
          style={{
            width: "250px",
            textAlign: "center",
          }}
        />
        <div className="flex">
          {filterCards.map((card) => {
            return (
              <Card
                key={card._id}
                card={card}
                deleteCard={this.RemoveCard}
                user={user}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Cards;
