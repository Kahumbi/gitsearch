import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MygithubComponent } from './mygithub.component';

describe('MygithubComponent', () => {
  let component: MygithubComponent;
  let fixture: ComponentFixture<MygithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MygithubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MygithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
