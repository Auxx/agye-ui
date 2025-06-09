import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { allButtonTypes, ButtonType } from '../types';

@Component({
  selector: 'agye-raised-button',
  imports: [ CommonModule ],
  templateUrl: './raised-button.component.html',
  styleUrl: './raised-button.component.scss'
})
export class RaisedButtonComponent {
  @Input()
  type: ButtonType = allButtonTypes[0];

  @Input()
  disabled = false;
}
