import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonDirective } from '../button/button.directive';

@Component({
  selector: 'agye-flat-button',
  imports: [ CommonModule ],
  templateUrl: './flat-button.component.html',
  styleUrl: './flat-button.component.scss',
  host: {
    '[attr.data-color]': 'color()',
    '[attr.data-disabled]': 'disabled()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlatButtonComponent extends ButtonDirective {}
