import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AnimationService } from '../services/animation.service';
import { IonHeader } from "@ionic/angular/standalone";
import { AnimationItem, LottiePlayer } from 'lottie-web';
import * as lottie from 'lottie-web';  // Esta línea es importante para poder usar lottie directamente
import { Router } from '@angular/router';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.page.html',
  styleUrls: ['./step4.page.scss'],
  standalone:false

})
export class Step4Page {
  finalAnimation = '';

  private animation: AnimationItem;

  constructor(
    private navCtrl: NavController,
    private animationService: AnimationService,
    private router: Router
  ) {}

  ngOnInit() {
    const name = localStorage.getItem('name') || 'Nombre';
    const age = localStorage.getItem('age') || '00';
    const color1 = localStorage.getItem('color1') || '#ff4081';
    const color2 = localStorage.getItem('color2') || '#3f51b5';
    const selectedId = parseInt(localStorage.getItem('selectedAnimation') || '1');
    const animations = this.animationService.getAnimations(name, age, color1, color2);
    const selected = animations.find(anim => anim.id === selectedId);
    this.finalAnimation = selected?.preview || '';

    // this.loadLottieAnimation();



  }

  ngOnDestroy() {
    if (this.animation) {
      this.animation.destroy();
    }
  }

  irapaso1(){
    this.router.navigate(['/home']);
  }

  goBack() {
    this.navCtrl.navigateBack('/step3');
  }


  // private loadLottieAnimation() {
  //   const animationContainer = document.getElementById('lottie-container');

  //   if (animationContainer) {
  //     this.animation = lottie.default.loadAnimation({
  //       container: animationContainer,
  //       path: 'assets/lotties_en_json/animation_celebration_1.json', // Reemplaza con la ruta de tu archivo JSON
  //       renderer: 'svg',
  //       loop: true,
  //       autoplay: true
  //     });
  //   }
  // }
  
}
