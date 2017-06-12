import { Component } from '@angular/core';
// import { PhotoViewer } from '../../../plugins/com-sarriaroman-photoviewer/www/PhotoViewer';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';

import { NavController } from 'ionic-angular';

import { Main } from '../Main/main';

@Component({
  selector: 'mapa',
  templateUrl: 'mapa.html'
})
export class Mapa {

  constructor(public navCtrl: NavController, private googleMaps: GoogleMaps) { }

  ngAfterViewInit() {
    this.loadMap();
  }

  loadMap() {}

  public goToMain() {
      this.navCtrl.setRoot(Main);
  }

}
