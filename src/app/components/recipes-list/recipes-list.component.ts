import { Component, Input, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/recipe.interface';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  private _recipeList: Array<IRecipe> = [];

  @Input() set recipeList(recipesList: Array<IRecipe>){
    this._recipeList = recipesList;
  }

  get recipeList(){
    return this._recipeList
  }

  constructor(private _recipeService : RecipeService) { }

  ngOnInit(): void {
  }

  public onRecipeItemClick(recipe: IRecipe, index: number){
      this.recipeList.forEach(element => {
        element.selected = false
      });
      recipe.selected = true
 
      this._recipeService.setSingleRecipe(recipe, index)
  }


}
