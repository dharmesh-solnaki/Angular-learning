import { EventEmitter } from '@angular/core';
import { Ingredients } from '../Shared/ingredient.model';

export class ShoppingListService {

    IngredientChanged = new EventEmitter<Ingredients[]>()

  private ingredients: Ingredients[] = [
    new Ingredients('Apples', 5),
    new Ingredients('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
this.IngredientChanged.emit(this.ingredients.slice());
  }

  addMultipleIngredients(ingredient: Ingredients[]){
  this.ingredients.push(...ingredient)
  this.IngredientChanged.emit(this.ingredients.slice());
  }
}
