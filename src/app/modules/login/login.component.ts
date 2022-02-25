import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SessionService } from 'src/app/services/session.service';
import * as _l from  'lodash';
import { LoaderComponent } from 'src/app/components/loader/loader.component';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm!: any;
  @ViewChild('loader') loader!: LoaderComponent;
  loginState:string = '';

  private credentials: any = {
    Usuario: 'user',
    Password: 'root'
  };

  constructor(
    private formBuilder: FormBuilder,
    private session: SessionService,
    private router: Router
  ) {
    this.loginForm = formBuilder.group({
      Usuario: '',
      Password: ''
    });
  }

  ngOnInit(): void {
  }

  login() {
    if(_l.isEqual(this.loginForm.value, this.credentials)) {
      this.loader.show('Iniciando session');
      this.loginState = 'loading';
      setTimeout(() => {
        this.router.navigate(['home/welcome']);
        this.session.set({
          First_Name:'Ricardo',
          Last_Name:'Zapata',
          Email: 'ricardozapata22@gmail.com'
        });
      }, 2000);
    } else {
      this.loginState = '';
      Swal.fire({
        icon: 'error',
        title:'Error',
        text: 'El usuario o contraseña son incorrectos, vuelva a intentarlo',
        confirmButtonText: 'Aceptar'
      })
    }
  }

}
