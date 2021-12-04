import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { GithubProfileComponent } from './github-profile.component';

class RouterStub{
  navigate() {}
}
class ActivatedRouteStub{
  paramMap?: Observable<any> = of(null);
}

describe('GithubProfileComponent', () => {
  let component: GithubProfileComponent;
  let fixture: ComponentFixture<GithubProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubProfileComponent ],
      providers: [
        { provide: Router, useClass: RouterStub},
        { provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
