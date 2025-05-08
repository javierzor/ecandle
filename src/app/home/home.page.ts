import { Component } from '@angular/core';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private storage: StorageService)
   {}


  async guardarEdad() {
    await this.storage.set('edad', 5);
  }
  
  async cargarEdad() {
    const edad = await this.storage.get<number>('edad');
    console.log('Edad cargada:', edad);
  }

}
