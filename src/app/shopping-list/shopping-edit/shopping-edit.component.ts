import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/Shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',

})
export class ShoppingEditComponent {
 @ViewChild('nameInput') nameInputRef;
 @ViewChild('amountInput')  amountInputRef;
 
 constructor(private shoppinglistservice:ShoppingListService){

 }


  AddToList(){
        const ingName = this.nameInputRef.nativeElement.value;
        const ingAmount = this.amountInputRef.nativeElement.value;

        const newIngredient = new  Ingredients(ingName, ingAmount);
 this.shoppinglistservice.addIngredient(newIngredient);

  }
}
