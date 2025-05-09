import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AnimationService } from '../services/animation.service';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.page.html',
  styleUrls: ['./step4.page.scss'],
  standalone:false

})
export class Step4Page {
  finalAnimation = '';

  constructor(
    private navCtrl: NavController,
    private animationService: AnimationService
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
  }

  goBack() {
    this.navCtrl.navigateBack('/step3');
  }



}
