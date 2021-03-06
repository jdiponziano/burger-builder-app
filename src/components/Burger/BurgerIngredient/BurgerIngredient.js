import React from 'react'
import PropTypes from 'prop-types'
import classes from './BurgerIngredient.css'

const BurgerIngredient = ({ type }) => {
  let ingredient = null

  switch (type) {
    case 'bread-bottom':
      ingredient = <div className={classes.BreadBottom}></div>
      break
    case 'bread-top':
      ingrediant = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      )
      break
    case 'meat':
      ingrediant = <div className={classes.Meat}></div>
      break
    case 'cheese':
      ingrediant = <div className={classes.Cheese}></div>
      break
    case 'salad':
      ingrediant = <div className={classes.Salad}></div>
      break
    case 'bacon':
      ingrediant = <div className={classes.Bacon}></div>
      break
    default:
      ingredient = null
  }

  return ingredient
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default BurgerIngredient
