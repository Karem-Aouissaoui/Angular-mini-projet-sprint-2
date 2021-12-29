import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService,
              private router : Router) { }

  user = new User();

  erreur = 0;
  onLoggedIn(){
    this.authService.login(this.user).subscribe((data) => {
      let jwt = data.headers.get('Authorization');
      this.authService.saveToken(jwt);
      this.router.navigate(['/']);
    }, (err) => { this.erreur = 1});
  }

  ngOnInit(): void {
  }

}
