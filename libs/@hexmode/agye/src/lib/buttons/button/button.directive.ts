import { Directive, input, signal } from '@angular/core';
import { allButtonTypes, allColors, ButtonType, Color } from '../types';

@Directive()
export class ButtonDirective {
  readonly type = input<ButtonType>(allButtonTypes[0]);

  readonly disabled = input(false);

  readonly color = input<Color>(allColors[0]);

  protected readonly touched = signal(false);
}
