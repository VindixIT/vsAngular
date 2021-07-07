import { Component, OnInit } from '@angular/core';
import { PilarService } from '../pilar.service';
import { Pilar } from '../pilar';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-pilar',
  templateUrl: './update-pilar.component.html',
  styleUrls: ['./update-pilar.component.css']
})
export class UpdatePilarComponent implements OnInit {

  id!: number
	pilar: Pilar = new Pilar()
	
  constructor(private PilarService: PilarService,  
	  private route: ActivatedRoute,
    private router:Router) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log('this is the id from ngOnInit', this.id)
	  this.PilarService.getPilarById(this.id)
    .subscribe(data => {
      console.log(data)
			this.pilar = data;
			}, error => console.log(error));
	}
  updatePilar(){
    this.PilarService.updatePilar(this.id, this.pilar)
      .subscribe(data => {
        console.log(data);
        this.pilar = new Pilar();
        this.goToPilarList
      }, error => console.log(error));

    }

    onSubmit(){
      this.PilarService.updatePilar(this.id, this.pilar).subscribe( data =>{
        console.log('estou enviando update?',this.id); 
        this.goToPilarList()
         console.log(data);

      });
    }
    goToPilarList(){
      this.router.navigate(['/pilar-list'])
      
    }


}
