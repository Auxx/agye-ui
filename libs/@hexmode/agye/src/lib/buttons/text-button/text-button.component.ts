import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonDirective } from '../button/button.directive';

@Component({
  selector: 'agye-text-button',
  imports: [ CommonModule ],
  templateUrl: '../button/button.template.html',
  styleUrl: './text-button.component.scss',
  host: {
    '[attr.data-color]': 'color()',
    '[attr.data-disabled]': 'disabled()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextButtonComponent extends ButtonDirective {}
