import {Component, Input, OnInit} from '@angular/core';
import { Item } from 'app/model/Factura';
import {FacturasService} from '../../../service/facturas.service';


@Component({
  selector: 'app-factura-item',
  templateUrl: './factura-item.component.html',
  styleUrls: ['./factura-item.component.css']
})
export class FacturaItemComponent implements OnInit {
  @Input() factura: Item;
  constructor(private facturaData: FacturasService) { }

  ngOnInit() {
  }
  goPrintFactura(id: string, nombre: string) {
    this.facturaData.getInvoice(id, nombre);
  }

}
