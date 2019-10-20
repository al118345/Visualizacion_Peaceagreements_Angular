import { Component, OnInit } from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';


@Component({
  selector: 'app-listado-subasta',
  templateUrl: './listado-subasta.component.html',
  styleUrls: ['./listado-subasta.component.css']
})
export class ListadoSubastaComponent implements OnInit {
  deviceInfo = null;
  isMobile = null;
  isTablet = null;
  isDesktopDevice = null;

  constructor(private deviceService: DeviceDetectorService) {
    this.dispositivo();
  }

  ngOnInit() {
  }
  dispositivo() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.isMobile = this.deviceService.isMobile();
    this.isTablet = this.deviceService.isTablet();
    this.isDesktopDevice = this.deviceService.isDesktop();
    console.log(this.deviceInfo);
  }

}

