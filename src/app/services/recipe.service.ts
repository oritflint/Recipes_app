import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IRecipe } from '../recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private mockdata = [
    {
      "id":1,
      "title": "lorem ut",
      "img_url": "https://material.angular.io/assets/img/examples/shiba2.jpg",
      "duration_time": 2,
      "ingredients": "nunc sed libero. Proin sed",
      "preperation": "cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices",
      "isConfirmed": true,
      "isArchived": false,
      "selected": true
    },
    {
      "id":2,
      "title": "ac risus",
      "img_url": "https://material.angular.io/assets/img/examples/shib1.jpg",
      "duration_time": 9,
      "ingredients": "libero mauris, aliquam eu, accumsan sed, facilisis",
      "preperation": "metus eu",
      "isConfirmed": true,
      "isArchived": false,
      "selected": false
    },
    {
      "id":3,
      "title": "Aenean",
      "img_url": "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
      "duration_time": 3,
      "ingredients": "in, dolor. Fusce feugiat. Lorem ipsum dolor",
      "preperation": "Integer aliquam adipiscing lacus.",
      "isConfirmed": true,
      "isArchived": false,
      "selected": false
    },
    {
      "id":4,
      "title": "magna",
      "img_url": "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg",
      "duration_time": 8,
      "ingredients": "vestibulum, neque sed dictum eleifend, nunc risus varius",
      "preperation": "dolor. Fusce feugiat.",
      "isConfirmed": true,
      "isArchived": false,
      "selected": false
    },
    {
      "id":5,
      "title": "nunc sed pede",
      "img_url": "https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif",
      "duration_time": 4,
      "ingredients": "nibh. Donec est mauris, rhoncus id,",
      "preperation": "erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie",
      "isConfirmed": true,
      "isArchived": false,
      "selected": false
    }
  ]

  private _recipesSubject: BehaviorSubject<Array<IRecipe>> = new BehaviorSubject(this. mockdata); 
  private _singleRecipeSubject: BehaviorSubject<IRecipe> = new BehaviorSubject(this. mockdata[0]); 

  constructor() { }

  public getRecipes(): Observable<Array<IRecipe>>{
    return this._recipesSubject.asObservable();
  }

  public getSeingleRecipe(): Observable<IRecipe>{
    return this._singleRecipeSubject.asObservable();
  }

  public setSingleRecipe(recipe: IRecipe, index: number): void{
    this._singleRecipeSubject.next(recipe)
    this.mockdata[index].selected = true
  }

}
