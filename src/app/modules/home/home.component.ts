import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  profile:any = null;

  constructor(
    private session: SessionService,
    private router: Router,
  ) {
    this.profile = session.get();
   }

  ngOnInit(): void {
  }

  logout() {
    this.session.clean();
    this.router.navigate(['login']);
  }

}
