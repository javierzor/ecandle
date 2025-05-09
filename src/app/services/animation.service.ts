// src/app/services/animation.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  getAnimations(name: string, age: string, color1: string, color2: string) {
    return [
      {
        id: 1,
        preview: `<svg width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="${color1}">
            <animate attributeName="r" values="40;45;40" dur="1s" repeatCount="indefinite"/>
          </circle>
        </svg>`
      },
      {
        id: 2,
        preview: `<svg width="100" height="100">
          <text x="10" y="50" font-size="14" fill="${color2}">${name}
            <animate attributeName="x" values="10;30;10" dur="1.5s" repeatCount="indefinite"/>
          </text>
        </svg>`
      },
      {
        id: 3,
        preview: `<svg width="100" height="100">
          <defs>
            <linearGradient id="grad1">
              <stop offset="0%" stop-color="${color1}"/>
              <stop offset="100%" stop-color="${color2}"/>
            </linearGradient>
          </defs>
          <rect x="10" y="10" width="80" height="80" fill="url(#grad1)">
            <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="3s" repeatCount="indefinite"/>
          </rect>
        </svg>`
      },
      {
        id: 4,
        preview: `<svg width="100" height="100">
          <circle cx="50" cy="50" r="40" fill="${color2}">
            <animate attributeName="fill" values="${color2};${color1};${color2}" dur="2s" repeatCount="indefinite"/>
          </circle>
        </svg>`
      },
      {
        id: 5,
        preview: `<svg width="100" height="100">
          <text x="10" y="60" font-size="20" fill="${color1}">🎂 ${age}</text>
        </svg>`
      },
      {
        id: 6,
        preview: `<svg width="100" height="100">
          <polygon points="50,10 90,90 10,90" fill="${color1}">
            <animateTransform attributeName="transform" type="scale" values="1;1.1;1" dur="2s" repeatCount="indefinite"/>
          </polygon>
        </svg>`
      }
    ];
  }
}
