import { Component, OnInit } from '@angular/core';
import {User} from '../../model/User';
import {UserService} from '../../service/user.service';
import {ContratoService} from '../../service/contrato.service';
import {Contrato, ListaContratos} from '../../model/Contrato';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public contratos: Contrato[];
  public user: User;
  public mostrar: boolean;

  constructor(private contratosService: ContratoService) { }

  ngOnInit() {

    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.contratos = this.contratosService.getContrato().items;
    if (this.contratos == null) {
      this.mostrar = false;
    }else {
        this.mostrar = true; 
    }
    //alert(this.contratos[0].amount_debt);
  }

}
