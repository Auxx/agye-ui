import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HexmodeAgyeComponent } from './agye.component';

describe('HexmodeAgyeComponent', () => {
  let component: HexmodeAgyeComponent;
  let fixture: ComponentFixture<HexmodeAgyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HexmodeAgyeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HexmodeAgyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
