import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonDirective } from '../button/button.directive';

@Component({
  selector: 'agye-raised-button',
  imports: [ CommonModule ],
  templateUrl: '../button/button.template.html',
  styleUrl: './raised-button.component.scss',
  host: {
    '[attr.data-color]': 'color()',
    '[attr.data-disabled]': 'disabled()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RaisedButtonComponent extends ButtonDirective {
}
