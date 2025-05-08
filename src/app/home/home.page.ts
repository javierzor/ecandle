import { Component } from '@angular/core';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  selectedAge: number = 1;
  ages: number[] = [];
  selectedLanguage: string = 'es'; // Por defecto español
  languages = [
    { code: 'es', label: 'Español' },
    { code: 'en', label: 'Inglés' },
    // Opcionalmente deja espacio para más
    // { code: 'it', label: 'Italiano' },
    // { code: 'pt', label: 'Português' },
  ];
  constructor() {
    this.populateAges();
  }

  populateAges() {
    this.ages = Array.from({ length: 100 }, (_, i) => i + 1);
  }

  increaseAge() {
    const currentIndex = this.ages.indexOf(this.selectedAge);
    if (currentIndex < this.ages.length - 1) {
      this.selectedAge = this.ages[currentIndex + 1];
    }
  }

  decreaseAge() {
    const currentIndex = this.ages.indexOf(this.selectedAge);
    if (currentIndex > 0) {
      this.selectedAge = this.ages[currentIndex - 1];
    }
  }

  selectLanguage(code: string) {
    this.selectedLanguage = code;
    // Aquí podrías guardar en Storage si quieres persistir
  }


}
