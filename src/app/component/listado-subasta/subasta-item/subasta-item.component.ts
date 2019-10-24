import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../../../service/dataservice';
import {Subasta} from '../../../model/Subasta';

@Component({
  selector: 'app-subasta-item',
  templateUrl: './subasta-item.component.html',
  styleUrls: ['./subasta-item.component.css']
})
export class SubastaItemComponent implements OnInit {

  @Input() subasta: Subasta;
  @Input() id: string;
  constructor(
    private router: Router,
    public dataservice: DataService
  ) {

  }

  ngOnInit() {
    alert(this.subasta.nombre)


  }
  viewDetails(item) {
    //      <img class="image" [src]="this.subasta.documento.url">
    this.subasta.id = this.id;
    this.dataservice.subasta = this.subasta;
    this.router.navigate(['app-mostrar-subasta']);
  }

}
