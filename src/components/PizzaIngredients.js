import React from "react";

import PizzaIngredient from "./PizzaIngredient";

class PizzaIngredients extends React.Component {
  render() {
    console.log(this.props.ingredients);
    return (
      <ul>
        {Object.keys(this.props.ingredients).map(ingredientKey => (
          <PizzaIngredient />
        ))}
      </ul>
    );
  }
}

export default PizzaIngredients;

/* TODO: Create the PizzaIngredients Component consisting of:
  - An `ul` where you `map` over `ingredients` to create a `PizzaIngredient` per `ingredientKey`
*/
