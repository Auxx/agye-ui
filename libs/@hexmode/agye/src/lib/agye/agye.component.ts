import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'agye-hexmode-agye',
  imports: [CommonModule],
  templateUrl: './agye.component.html',
  styleUrl: './agye.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HexmodeAgyeComponent {}
