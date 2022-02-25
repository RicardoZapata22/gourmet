import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GourmetProvider } from 'src/app/providers/gourmet.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  dish: any = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private gourmetProvider: GourmetProvider,
  ) { }

  async ngOnInit(): Promise<void> {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    const resp = await this.gourmetProvider.getDishDetailById(id);
    this.dish = resp.meals.pop();
  }

}
