import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FollowerService } from '../service/follower.service';

import { FavoriteIconComponent } from './favorite-icon.component';

describe('FavoriteIconComponent', () => {
  let component: FavoriteIconComponent;
  let fixture: ComponentFixture<FavoriteIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase like count when clicked', () => {
    component.totalLikes = 10;
    component.myLike= 0;
    let de= fixture.debugElement.queryAll(By.css('span'))[1];
    let el: HTMLElement = de.nativeElement;

    
    component.onClick();
    fixture.detectChanges();

    expect(el.innerText).toContain("11");
  });

  it('should decrease like count if already clicked', () => {
    component.totalLikes = 10;
    component.myLike= 1;
    let de= fixture.debugElement.queryAll(By.css('span'))[1];
    let el: HTMLElement = de.nativeElement;

    
    component.onClick();
    fixture.detectChanges();

    expect(el.innerText).toContain("9");
  });
});
