import { Component, OnInit } from '@angular/core';
import {Subasta, Localizacion, Upload} from '../../../model/Subasta';
import {FirebaseStorageService} from '../../../service/firebase-storage.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {SubastaService} from '../../../service/subasta.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  subasta: Subasta;
  public mensajeArchivo = 'No hay un archivo seleccionado';
  public datosFormulario = new FormData();
  public nombreArchivo = '';
  public URLPublica = '';
  public porcentaje = 0;
  public finalizado = false;

  public archivoForm = new FormGroup({
    archivo: new FormControl(null, Validators.required),
  });

  constructor(    private firebaseStorage: FirebaseStorageService, private subastaService: SubastaService
  ) {
  }
  //https://medium.com/angular-chile/subir-archivos-a-firebase-cloud-storage-con-angular-7-d735d5dbfa53
  ngOnInit() {
    this.subasta = new Subasta('', new Date(), true , '' , '' , '' , '' , null ,
      '' , new Localizacion(1, 1 ) , '' , 10, 1, [''], false, false, null);
  }
  cancel() {

  }
  public almacenarSubasta() {
    this.subirArchivo();
  }
  //Evento que se gatilla cuando el input de tipo archivo cambia
  public cambioArchivo(event) {
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.mensajeArchivo = `Archivo preparado: ${event.target.files[i].name}`;
        this.nombreArchivo = event.target.files[i].name;
        this.datosFormulario.delete('archivo');
        this.datosFormulario.append('archivo', event.target.files[i], event.target.files[i].name)
      }
    } else {
      this.mensajeArchivo = 'No hay un archivo seleccionado';
    }
  }


  //Sube el archivo a Cloud Storage
  public subirArchivo() {
    let archivo = this.datosFormulario.get('archivo');
    let referencia = this.firebaseStorage.referenciaCloudStorage(this.nombreArchivo);
    let tarea = this.firebaseStorage.tareaCloudStorage(this.nombreArchivo, archivo);

    //Cambia el porcentaje
    tarea.percentageChanges().subscribe((porcentaje) => {
      this.porcentaje = Math.round(porcentaje);
      if (this.porcentaje == 100) {
        this.finalizado = true;
        referencia.getDownloadURL().subscribe((URL) => {
          this.subasta.documento = new Upload();
          this.subasta.documento.name = this.nombreArchivo;
          this.subasta.documento.url = URL;
          this.subastaService.almacenarSubasta(this.subasta) .then(res => {
            alert('fin_almacenado');
            });
          this.URLPublica = URL;
        });
      }
    });
  }
}
