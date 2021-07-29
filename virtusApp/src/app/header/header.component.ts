import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  title = 'virtusApp [Local ver 1.3.0]';  
  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private router: Router, public authService: AuthService ) {
  }

  ngOnInit() {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  logout() {
    this.authService.logout();
  }
}
