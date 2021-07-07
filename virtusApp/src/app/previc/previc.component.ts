import {Component} from '@angular/core';
import {PrevicService} from '../previc/previc.service';
import {Pendencia} from '../pendencias';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-previcd',
  templateUrl: './previc.component.html',
  styleUrls: ['./previc.component.css']
})
export class PrevicComponent {
  constructor(private previcService: PrevicService) {
  }
  
  displayedColumns = ['criadoEm', 'title', 'categoria', 'delete'];
  dataSource = new PostDataSource(this.previcService);
}

export class PostDataSource extends DataSource<any> {
  constructor(private dataService: PrevicService) {
    super();
  }

  connect(): Observable<Pendencia[]> {
    return this.dataService.getPrevicData();
  }

  disconnect() {
  }
}
