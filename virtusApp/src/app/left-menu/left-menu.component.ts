import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-left-menu-list',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  
  sidenav!:MatSidenav;
  @Output() leftmenuClose = new EventEmitter();
  constructor(public authService:AuthService) { }
  ngOnInit() {
  }
  public onSidenavClose = () => {
    this.leftmenuClose.emit();
  }
  logout() {
    this.authService.logout();
  }

}
