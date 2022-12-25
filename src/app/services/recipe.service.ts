import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IRecipe } from '../recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private Recipes: Array<IRecipe> = [];

  private _recipesSubject: BehaviorSubject<Array<IRecipe>> = new BehaviorSubject(this. Recipes); 
  private _singleRecipeSubject: BehaviorSubject<IRecipe> = new BehaviorSubject(this. Recipes.length>0? this. Recipes[0]:null); 
  public recipeList: Array<IRecipe>

  constructor() { }

  public getRecipes(): Observable<Array<IRecipe>>{
    if (this._recipesSubject.value.length==0){
      const sRecipeList: string = localStorage.getItem("RecipeList")
      if(sRecipeList){
        const arrRecipeList: Array<IRecipe> = JSON.parse(sRecipeList)
        this._recipesSubject.next(arrRecipeList)
        this._singleRecipeSubject.next(arrRecipeList[0])
      }
    }

    return this._recipesSubject.asObservable();
  }

  public getSelectedRecipe(): Observable<IRecipe>{
    return this._singleRecipeSubject.asObservable();
  }

  public setSingleRecipe(recipe: IRecipe, index: number): void{
    this._singleRecipeSubject.next(recipe)
    this.Recipes[index].selected = true
  }

  public addNewRecipe(newRecipe: IRecipe): void  {
    const existingRecipes: Array<IRecipe> = this._recipesSubject.value;
    if (!existingRecipes.length){
      newRecipe.selected = true;
      this._singleRecipeSubject.next(newRecipe)
    }
    existingRecipes.push(newRecipe);
    this._recipesSubject.next(existingRecipes)
    localStorage.setItem("RecipeList", JSON.stringify(existingRecipes))

  }

  public onRecipeAction(recipeId: string, sAction: string): void{
    const existingRecipes: Array<IRecipe> = this._recipesSubject.value;
    console.log("existingRecipes: ",existingRecipes)
    const recipeIndex = existingRecipes.findIndex(e=> e.id == recipeId)
    console.log(recipeIndex)
    existingRecipes[recipeIndex][sAction] = existingRecipes[recipeIndex][sAction]==true ? false: true;
    localStorage.setItem("RecipeList", JSON.stringify(existingRecipes))  
    this._recipesSubject.next(existingRecipes)
  }

}
