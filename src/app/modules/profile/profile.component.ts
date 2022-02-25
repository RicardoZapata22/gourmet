import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: any = null;

  constructor(
    private session: SessionService,
    private router: Router
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
