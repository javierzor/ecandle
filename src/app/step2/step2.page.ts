import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.page.html',
  styleUrls: ['./step2.page.scss'],
  standalone: false

})
export class Step2Page  {
  popularColors = ['#FF5733', '#33C1FF', '#FFD700', '#8E44AD', '#28B463', '#F39C12', '#1ABC9C', '#E74C3C'];

  selectedBackground: string = '';
  selectedPrimary: string = '';
  selectedSecondary: string = '';

  constructor(private router: Router) {}

  selectColor(type: 'background' | 'primary' | 'secondary', color: string) {
    if (type === 'background') this.selectedBackground = color;
    if (type === 'primary') this.selectedPrimary = color;
    if (type === 'secondary') this.selectedSecondary = color;
  }

  goToStep3() {
    localStorage.setItem('backgroundColor', this.selectedBackground);
    localStorage.setItem('primaryColor', this.selectedPrimary);
    localStorage.setItem('secondaryColor', this.selectedSecondary);
    this.router.navigate(['/step3']);
  }

  goBack() {
    // Guarda los colores en caso también quiera mantenerlos al volver
    localStorage.setItem('backgroundColor', this.selectedBackground);
    localStorage.setItem('primaryColor', this.selectedPrimary);
    localStorage.setItem('secondaryColor', this.selectedSecondary);
    this.router.navigate(['/home']);
  }
  

}
