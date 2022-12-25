import { Component, Input, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/recipe.interface';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

private _recipe: IRecipe;
    
@Input() set recipe(recipe: IRecipe){
    this._recipe = recipe;
    console.log(recipe)
  }

  get recipe(){
    return this._recipe
  }

  constructor(private _recipeService : RecipeService) { }

  ngOnInit(): void {
  }

  public onClickConfirm(): void{
    console.log("this.recipe.id",this.recipe.id)
    this._recipeService.onRecipeAction(this.recipe.id, "isConfirmed")
    //this.recipe.isConfirmed = this.recipe.isConfirmed? false : true
  }

  public onClickArchive(): void{
    console.log("this.recipe.id",this.recipe.id)
    this._recipeService.onRecipeAction(this.recipe.id, "isArchived")
    //this.recipe.isArchived = true   
  }
}
