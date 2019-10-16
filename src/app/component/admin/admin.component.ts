import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FirebaseService} from '../../service/firebase.service';
import {Register} from '../../model/Register';
import {DataService} from '../../service/dataservice';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  searchValue = '';
  searchNif = '';
  searchRol = '';
  items: Array<any>;
  rol_filtered_items: Array<any>;
  name_filtered_items: Array<any>;
  nif_filtered_items: Array<any>;


  constructor( public firebaseService: FirebaseService,
               public dataservice: DataService,
               private router: Router) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.firebaseService.getUsers()
      .subscribe(result => {
        this.items = result;
        this.name_filtered_items = result;
        this.nif_filtered_items = result;
        this.rol_filtered_items = result;
      })
  }

  viewDetails(item) {
    this.dataservice.user = item.payload.doc.data();
    this.dataservice.user.id = item.payload.doc.id;
    this.router.navigate(['/app-usuario']);
  }

  capitalizeFirstLetter(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  searchByName() {
    this.firebaseService.searchUsers(this.searchValue)
      .subscribe(result => {
        this.name_filtered_items = result;
        const aux = this.combineLists(result, this.nif_filtered_items);
        this.items = this.combineLists(aux, this.rol_filtered_items);
      })
  }

  searchbyNif() {
    this.firebaseService.searchNif(this.searchValue)
      .subscribe(result => {
        this.nif_filtered_items = result;
        const aux = this.combineLists(result, this.name_filtered_items);
        this.items = this.combineLists(aux, this.rol_filtered_items);
      })
  }
  combineLists(a, b) {
    const result = [];

    a.filter(x => {

      return b.filter(x2 => {
        if ( x2.payload.doc.id === x.payload.doc.id) {
          result.push(x2);
        }
      });
    });
    return result;
  }

  searchbyRol() {
    this.firebaseService.searchRol(this.searchRol)
      .subscribe(result => {
        alert(result.length)
        this.rol_filtered_items = result;
        const aux = this.combineLists(result, this.name_filtered_items);
        this.items = this.combineLists(aux, this.name_filtered_items);

      })
  }
}







