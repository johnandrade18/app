import {Component, OnInit } from '@angular/core';
import { DomiciliariosService } from '../../../services/domiciliarios.service';
import {MatTableDataSource} from '@angular/material/table';
import { Idomiciliario } from '../../../interface/idomiciliario';

@Component({
  selector: 'app-domiciliario',
  templateUrl: './domiciliario.component.html',
  styleUrls: ['./domiciliario.component.scss']
})
export class DomiciliarioComponent implements OnInit {

  // variable que instancia la data que aparece en la tabla
  dataSource!: MatTableDataSource<Idomiciliario>;


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  agendas: Idomiciliario[] = [];
  constructor( private domiciliariosService: DomiciliariosService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.domiciliariosService.getData().subscribe((res:any) => {
      position: 1
      this.agendas = Object.keys(res).map(key => ({
        paciente: res[key].paciente.nombre,
        direccion: res[key].paciente.direccion,
        barrio: res[key].paciente.barrio,
        telefono: res[key].paciente.celular,
        ordenDeTrabajo: res[key].ordentrabajo_id,
        ordenDeServicio: res[key].ordenservicio_id,
        servicio: res[key].servicio,
        fechaValida: res[key].ordentrabajo_validahasta,
        asignadas: res[key].actividades_asignadas,
        realizadas: res[key].actividades_realizadas,
        obsevaciones: res[key].ordentrabajo_observaciones,
        firmas: res[key].ordentrabajo_firmas,
      } as Idomiciliario));

      this.dataSource = new MatTableDataSource(this.agendas);
      console.log(this.dataSource);
    })
  }

}
