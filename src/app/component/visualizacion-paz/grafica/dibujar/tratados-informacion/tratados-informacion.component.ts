import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {Tratados} from '../../../../../model/Tratados';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-tratados-informacion',
  templateUrl: './tratados-informacion.component.html',
  styleUrls: ['./tratados-informacion.component.css']
})
export class TratadosInformacionComponent implements OnInit, OnChanges {
  @Input() texto_tratado: string;
  texto: string;

  mySubscription: any;

  constructor() {
  }



  ngOnInit() {
    this.texto = this.texto_tratado.replace('\n', '<br>');
  }

  ngOnChanges(changes: SimpleChanges) {
    this.ngOnInit();
    // changes.prop contains the old and the new value...
  }

}


