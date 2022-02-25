import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GourmetProvider } from 'src/app/providers/gourmet.service';
import * as _l from 'lodash';

@Component({
  selector: 'app-main-dish',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  finder:string = '';
  dishes: any = [];

  constructor(
    private gourmetProvider: GourmetProvider,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  async ngOnInit(): Promise<void> {
      const resp = await this.gourmetProvider.getAllDishes();
      this.dishes = resp.meals;
  }

  openDish(dish: any){
    this.router.navigate(['detail',dish.idMeal], {relativeTo: this.activatedRoute});
  }

  getListDishes() {
    return _l.filter(this.dishes, item => {
      return item.strMeal.toLowerCase().includes(this.finder.toLowerCase()) || item.strCategory.toLowerCase().includes(this.finder.toLowerCase());
    });
  }

}
