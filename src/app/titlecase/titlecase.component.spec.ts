import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PascalCasePipe } from '../custom-pipe/pascalcase.pipe';

import { TitlecaseComponent } from './titlecase.component';

describe('TitlecaseComponent', () => {
  let component: TitlecaseComponent;
  let fixture: ComponentFixture<TitlecaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlecaseComponent, PascalCasePipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlecaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
