import { Component, OnInit } from '@angular/core';
import { TipoNotaService } from '../tipoNota.service';
import { TipoNota } from '../tipoNota';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-tipoNota',
  templateUrl: './update-tipoNota.component.html',
  styleUrls: ['./update-tipoNota.component.css']
})
export class UpdateTipoNotaComponent implements OnInit {

  id!: number
	tipoNota: TipoNota = new TipoNota()
	
  constructor(private TipoNotaService: TipoNotaService,  
	  private route: ActivatedRoute,
    private router:Router) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log('this is the id from ngOnInit', this.id)
	  this.TipoNotaService.getTipoNotaById(this.id)
    .subscribe(data => {
      console.log(data)
			this.tipoNota = data;
			}, error => console.log(error));
	}
  updateTipoNota(){
    this.TipoNotaService.updateTipoNota(this.id, this.tipoNota)
      .subscribe(data => {
        console.log(data);
        this.tipoNota = new TipoNota();
        this.goToTipoNotaList
      }, error => console.log(error));

    }

    onSubmit(){
      this.TipoNotaService.updateTipoNota(this.id, this.tipoNota).subscribe( data =>{
        console.log('estou enviando update?',this.id); 
        this.goToTipoNotaList()
         console.log(data);

      });
    }
    goToTipoNotaList(){
      this.router.navigate(['/tipoNota-list'])
      
    }


}
