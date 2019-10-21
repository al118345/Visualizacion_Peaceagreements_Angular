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
  constructor(
    private router: Router,
    public dataservice: DataService
  ) {

  }

  ngOnInit() {
    alert(this.subasta.nombre)


  }
  viewDetails(item) {
    this.dataservice.subasta = this.subasta;
    this.router.navigate(['app-mostrar-subasta']);
  }

}
