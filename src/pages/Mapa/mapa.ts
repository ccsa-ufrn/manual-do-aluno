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

  loadMap() {
    let element: HTMLElement = document.getElementById('map');
    let map: GoogleMap = this.googleMaps.create(element);
    map.one(GoogleMapsEvent.MAP_READY).then(
     () => {
       console.log('Map is ready!');
       // Now you can add elements to the map like the marker
     }
   );

   let ionic: LatLng = new LatLng(43.0741904,-89.3809802);
     let position: CameraPosition = {
     target: ionic,
     zoom: 18,
     tilt: 30
   };
    map.moveCamera(position);
  }

  public goToMain() {
      this.navCtrl.setRoot(Main);
  }

}
