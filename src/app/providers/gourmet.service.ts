import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GourmetProvider {

  constructor(
    private http: HttpClient
  ) { }

  getAllDishes(): any {
    return this.http.get('/search.php?s=').toPromise();
  }

  getDishesByIngredient(ingredient: string): any {
    return this.http.get('/filter.php?i=' + (ingredient.replace(/ /g,'_'))).toPromise();
  }

  getDishDetailById(id:any): any{
    return this.http.get('/lookup.php?i=' + id).toPromise();
  }

  getRandomDish(): any {
    return this.http.get('/random.php').toPromise();
  }
}
