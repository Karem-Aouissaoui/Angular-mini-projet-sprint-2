import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestion des fichiers';
  constructor(public authService : AuthService,
              private router: Router,
              private helper : JwtHelperService){}
  ngOnInit(){
    this.authService.loadToken();
    if(this.authService.getToken() == null || 
       this.authService.isTokenExpired())
       this.router.navigate(['/login']);
  }

  onLogout(){
    this.authService.onLogout();
  }
}
