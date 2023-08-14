import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class Login {

  constructor(private router: Router) { }

  navigate(path: string) {
    this.router.navigate([path])
  }

}
