import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Role } from './models/role';
import { AuthService } from './services/auth.service';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

export class AppComponent {
  title = 'virtusApp [Local ver 1.3.0]';  
  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;
    
  constructor(private router: Router,
    public authService: AuthService,
    private observer: BreakpointObserver ) {

  }
  ngAfterViewInit(){
    this.observer.observe(['(max-width:800px)']).subscribe((res)=>{
      if(res.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }else{
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    })
  }

  logout() {
    this.authService.logout();
    //this.router.navigate(['welcome']);
  }
    //get isAuthorized() {
    //return this.authService.isAuthorized();
  //}
  //get isAdmin() {
    //return this.authService.hasRole(Role.Admin);
  //}
  //get isSupervisor() {
    //return this.authService.hasRole(Role.Supervisor);
  //}
  //get isChefe() {
    //return this.authService.hasRole(Role.Chefe);
  //}
}