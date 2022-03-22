import { Component, OnInit } from '@angular/core';
import { DomiciliariosService } from '../../../services/domiciliarios.service';

@Component({
  selector: 'app-domiciliario',
  templateUrl: './domiciliario.component.html',
  styleUrls: ['./domiciliario.component.scss']
})
export class DomiciliarioComponent implements OnInit {

  constructor( private domiciliariosService: DomiciliariosService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.domiciliariosService.getData().subscribe((res:any) => {
      Object.keys(res).map(key => {
        console.log('res', res[key].paciente)
      });
    })
  }

}
