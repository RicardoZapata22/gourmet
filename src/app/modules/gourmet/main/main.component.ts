import { Component, OnInit } from '@angular/core';
import { GourmetProvider } from 'src/app/providers/gourmet.service';

@Component({
  selector: 'app-main-dish',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  finder:string = '';
  dishes: any = [];

  constructor(
    private gourmetProvider: GourmetProvider
  ) { }

  async ngOnInit(): Promise<void> {
      const resp = await this.gourmetProvider.getAllDishes();
      this.dishes = resp.meals;
      console.log(this.dishes);
  }

  openDish(dish: any){

  }

}
