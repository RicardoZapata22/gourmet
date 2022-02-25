import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngredientsProvider {

  private _base: string = '/list.php?i=list';

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): any {
    return this.http.get(this._base).toPromise();
  }
}
