import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FirebaseService} from '../../service/firebase.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  ageValue = 0;
  searchValue = '';
  items: Array<any>;
  age_filtered_items: Array<any>;
  name_filtered_items: Array<any>;

  constructor( public firebaseService: FirebaseService,
               private router: Router) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.firebaseService.getUsers()
      .subscribe(result => {
        this.items = result;
        this.age_filtered_items = result;
        this.name_filtered_items = result;
      })
  }

  viewDetails(item) {
    this.router.navigate(['/details/' + item.payload.doc.id]);
  }

  capitalizeFirstLetter(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  searchByName() {
    const value = this.searchValue.toLowerCase();
    this.firebaseService.searchUsers(value)
      .subscribe(result => {
        this.name_filtered_items = result;
        this.items = this.combineLists(result, this.age_filtered_items);
      })
  }

  rangeChange(event) {
    this.firebaseService.searchUsersByAge(event.value)
      .subscribe(result => {
        this.age_filtered_items = result;
        this.items = this.combineLists(result, this.name_filtered_items);
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
}







