import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonDirective } from '../button/button.directive';

@Component({
  selector: 'agye-flat-button',
  imports: [ CommonModule ],
  templateUrl: './flat-button.component.html',
  styleUrl: './flat-button.component.scss'
})
export class FlatButtonComponent extends ButtonDirective {}
