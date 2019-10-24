import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../service/dataservice';
import {Subasta} from '../../../model/Subasta';
import {SubastaService} from '../../../service/subasta.service';
//https://getbootstrap.com/docs/4.0/examples/product/
@Component({
  selector: 'app-mostrar-subasta',
  templateUrl: './mostrar-subasta.component.html',
  styleUrls: ['./mostrar-subasta.component.css']
})
export class MostrarSubastaComponent implements OnInit {
  subasta: Subasta;

  constructor(  private subastaService: SubastaService,  public dataservice: DataService
  ) { }

  ngOnInit() {
    this.subasta = this.dataservice.subasta;
    alert(this.subasta.nombre)

  }
  pujar() {
    this.subasta.puja = this.subasta.puja + this.subasta.puja_minima
    this.subastaService.modificarpuja(this.subasta.id, this.subasta)

  }

}
