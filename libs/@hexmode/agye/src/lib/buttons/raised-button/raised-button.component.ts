import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { allButtonTypes, allColors, ButtonType, Color } from '../types';

@Component({
  selector: 'agye-raised-button',
  imports: [ CommonModule ],
  templateUrl: './raised-button.component.html',
  styleUrl: './raised-button.component.scss',
  host: {
    '[attr.data-color]': 'color()',
    '[attr.data-disabled]': 'disabled()'
  }
})
export class RaisedButtonComponent {
  readonly type = input<ButtonType>(allButtonTypes[0]);

  readonly disabled = input(false);

  readonly color = input<Color>(allColors[0]);

  protected readonly touched = signal(false);
}
