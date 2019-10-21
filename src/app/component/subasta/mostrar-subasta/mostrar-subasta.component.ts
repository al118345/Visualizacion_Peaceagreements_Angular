import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../service/dataservice';
import {Subasta} from '../../../model/Subasta';

@Component({
  selector: 'app-mostrar-subasta',
  templateUrl: './mostrar-subasta.component.html',
  styleUrls: ['./mostrar-subasta.component.css']
})
export class MostrarSubastaComponent implements OnInit {
  subasta: Subasta;

  constructor(    public dataservice: DataService
  ) { }

  ngOnInit() {
    this.subasta = this.dataservice.subasta;
    alert(this.subasta.nombre)

  }

}
