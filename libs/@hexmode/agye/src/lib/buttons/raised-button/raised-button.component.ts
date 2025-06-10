import { CommonModule } from '@angular/common';
import { Component, effect, input } from '@angular/core';
import { allButtonTypes, allColors, ButtonType, Color } from '../types';

@Component({
  selector: 'agye-raised-button',
  imports: [ CommonModule ],
  templateUrl: './raised-button.component.html',
  styleUrl: './raised-button.component.scss',
  host: {
    '[attr.data-color]': 'color()'
  }
})
export class RaisedButtonComponent {
  type = input<ButtonType>(allButtonTypes[0]);

  disabled = input(false);

  color = input<Color>(allColors[0]);

  constructor() {
    effect(() => {
      console.log('color', this.color());
    });
  }
}
