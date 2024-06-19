import { Component } from '@angular/core';
import { Ingredients } from '../Shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',

})
export class ShoppingListComponent {
ingredients:Ingredients[] =[];

 constructor(private shoppinglistservice : ShoppingListService) {
 }
 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.ingredients=this.shoppinglistservice.getIngredients()
  this.shoppinglistservice.IngredientChanged.subscribe((ingredients:Ingredients[])=>{
    this.ingredients=ingredients;
  })


 }




}
