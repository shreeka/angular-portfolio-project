import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubProjectsComponent } from './github-projects.component';

describe('GithubProjectsComponent', () => {
  let component: GithubProjectsComponent;
  let fixture: ComponentFixture<GithubProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GithubProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
