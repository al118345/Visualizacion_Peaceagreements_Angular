import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-aceptar-contrato',
  templateUrl: './aceptar-contrato.component.html',
  styleUrls: ['./aceptar-contrato.component.css']
})
export class AceptarContratoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public captureScreen()
  {
    let data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
// Few necessary setting options
      var img=canvas.toDataURL("image/png");
      var doc = new jspdf();
      doc.addImage(img, 'JPEG', 10, 10, 210, 290);
      doc.save('test.pdf');
    });
  }

}
