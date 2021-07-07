import { Component, OnInit } from '@angular/core';
import { Pilar } from '../pilar';
import { PilarService } from '../pilar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-pilar',
  templateUrl: './create-pilar.component.html',
  styleUrls: ['./create-pilar.component.css']
})
export class CreatePilarComponent implements OnInit {

  
  pilar: Pilar = new Pilar()
  constructor(private pilarSevice: PilarService,
    private router: Router ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log('submit',this.pilar);
    this.savePilar()
  }

  savePilar(){
    this.pilarSevice.createPilar(this.pilar).subscribe( data =>{
      console.log('Save pilar:',data);
      this.goToPilarList();
    },
    error => console.log(error));
    
  }

  goToPilarList(){
    this.router.navigate(['pilar-list']) //O path pilar devera ser alterado para pilar-details ou pilar view depois
  }



}
