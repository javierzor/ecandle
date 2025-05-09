import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AnimationService } from '../services/animation.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.page.html',
  styleUrls: ['./step3.page.scss'],
  standalone:false
})
export class Step3Page {
  animations: any[] = [];
  name = localStorage.getItem('name') || 'Nombre';
  age = localStorage.getItem('age') || '00';
  color1 = localStorage.getItem('color1') || '#ff4081';
  color2 = localStorage.getItem('color2') || '#3f51b5';

  constructor(
    private navCtrl: NavController,
    private animationService: AnimationService
  ) {}

  ngOnInit() {
    this.animations = this.animationService.getAnimations(this.name, this.age, this.color1, this.color2);
  }

  selectAnimation() {
    this.navCtrl.navigateForward('/step4');
  }
}
