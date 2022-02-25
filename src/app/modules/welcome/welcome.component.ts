import { Component, OnInit } from '@angular/core';
import { GourmetProvider } from 'src/app/providers/gourmet.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogDish } from 'src/app/components/dialog-dish/dialog-dish.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  random: any = null;

  constructor(
    private dialog: MatDialog,
    private gourmetProvider: GourmetProvider,
  ) { }

  async ngOnInit(): Promise<any> {
    const resp = await this.gourmetProvider.getRandomDish();
    this.random = resp.meals.pop();
    this.openDialog();
  }

  async openDialog() {
    DialogDish.random = this.random;
    DialogDish.title = "¡Platillo del dia!";
    this.dialog.open(DialogDish);
  }
}
