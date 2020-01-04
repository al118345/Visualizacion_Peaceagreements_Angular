import {Component, Input, OnChanges, OnInit, SecurityContext} from '@angular/core';
import {Http} from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-mundo-web',
  templateUrl: './mundo-web.component.html',
  styleUrls: ['./mundo-web.component.css']
})
export class MundoWebComponent implements OnInit {
  file: string;
  private myTemplate: any;

  @Input() path: string;
  _last: string;
  web: string;
  realizado: boolean;

  constructor(public sanitizer: DomSanitizer) {
    this._last = this.path;
    this.realizado= false;
  }


  ngOnInit() {
    this.web = 'assets/docs/paginas_mundo/' + this.path + '.html';
  }

  ngOnChanges() {
    if (this._last !== this.path) {
      this.realizado=false;
    this.ngOnInit();
      this._last = this.path;
    }
  }

  path_web() {
      this.realizado = true;
      //return 'https://lacasadelbanquet.com/'
    //return  this.sanitizer.bypassSecurityTrustResourceUrl(this.web);
    return this.web;

  }



}
