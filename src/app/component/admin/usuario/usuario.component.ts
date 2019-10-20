import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FirebaseService} from '../../../service/firebase.service';
import {DataService} from '../../../service/dataservice';
import {User} from '../../../model/User';




@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  model: any = {};
  user: User;
  loading: boolean;
  roles: Array<any>;
  array_roles: [];

  constructor(
    public dataservice: DataService,
    private router: Router,
    private firebase: FirebaseService
  ) { }

  ngOnInit() {
    this.user = this.dataservice.user;
    this.loading = false;
    this.firebase.searchRoles()
      .subscribe(result => {
          this.roles =  result
          for (let i of this.roles) {
            this.array_roles = i.payload.doc.data().Tipos;
          }

      })
    if (this.user == null) {
      this.router.navigate(['./app-admin']);
    }
  }

  cancel() {
    this.router.navigate(['/app-admin']);
  }
  almacenarrol() {
    alert(this.user.rol)
    this.firebase.almacenarrol(this.user.id, this.user)
      .then(
        res => {
          this.router.navigate(['/app-admin']);
        }, err => {
          alert(err);
        }
      )
  }
}
