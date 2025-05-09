import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.page.html',
  styleUrls: ['./step3.page.scss'],
  standalone:false
})
export class Step3Page {
  age: number = 0;
  language: string = 'es';
  selectedAnimation: string = '1';
  primaryColor: string = '#000000';
  secondaryColor: string = '#ffffff';
  backgroundColor: string = '#eeeeee';
  selectedFont: string = 'Arial';

  constructor(private navCtrl: NavController) {}

  ionViewWillEnter() {
    const cached = JSON.parse(localStorage.getItem('birthdayData') || '{}');
    this.age = cached.age || 0;
    this.language = cached.language || 'es';
    this.primaryColor = cached.primaryColor || '#000';
    this.secondaryColor = cached.secondaryColor || '#fff';
    this.backgroundColor = cached.backgroundColor || '#eee';
    this.selectedAnimation = cached.animation || this.selectAnimationByAge(this.age);
    this.selectedFont = this.selectFontByAge(this.age);
  }

  selectAnimationByAge(age: number): string {
    if (age <= 3) return '1';
    if (age <= 6) return '2';
    if (age <= 10) return '3';
    if (age <= 15) return '4';
    if (age <= 25) return '5';
    return '6';
  }

  selectFontByAge(age: number): string {
    if (age <= 3) return "'Comic Sans MS', cursive";
    if (age <= 10) return "'Baloo 2', cursive";
    if (age <= 18) return "'Pacifico', cursive";
    if (age <= 30) return "'Raleway', sans-serif";
    return "'Playfair Display', serif";
  }

  getBirthdayMessage(): string {
    const messages = {
      es: '¡Feliz cumpleaños!',
      en: 'Happy Birthday!',
      it: 'Buon compleanno!',
      pt: 'Feliz aniversário!'
    };
    return messages[this.language] || messages['es'];
  }

  goBack() {
    this.navCtrl.navigateBack('/step2');
  }

  goNext() {
    this.navCtrl.navigateForward('/step4');
  }
}
