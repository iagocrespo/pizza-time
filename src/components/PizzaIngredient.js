import React from "react";
import { formatPrice } from "../helpers";

class PizzaIngredient extends React.Component {
  handleClick = _event => {
    this.props.updateIngredient(this.props.ingredientKey);
  };

  render() {
    /* TODO: Reducir `this.props.yLoQueVengaDetras` con los elementos que usamos */
    return (
      <li
        className={this.props.ingredient.selected ? "marked" : ""}
        onClick={this.handleClick}
      >
        <span className="phrase">{this.props.ingredient.name}</span>
        <span className="points">
          {formatPrice(this.props.ingredient.cash)}
        </span>
      </li>
    );
  }
}

export default PizzaIngredient;

/* TODO: Create the PizzaIngredient Component consisting of:
  - An `li` with
    class `{this.props.ingredient.selected ? "marked" : ""}`
    onClick that switch the value of the current ingredient `selected` property
    (HINT: 👆 Remember, to change state you need to declare a function where state lives)
    - A `span` with class `phrase`
      Show the value of the current ingredient `name` property
    - A `span` with class `points`
      Show the value of the current ingredient `cash` property.
      (HINT: 👆 Check out `src/helpers.js` to import the `formatPrice` function)
*/
