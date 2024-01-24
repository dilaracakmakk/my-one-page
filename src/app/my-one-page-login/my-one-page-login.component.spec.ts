import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOnePageLoginComponent } from './my-one-page-login.component';

describe('MyOnePageLoginComponent', () => {
  let component: MyOnePageLoginComponent;
  let fixture: ComponentFixture<MyOnePageLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyOnePageLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyOnePageLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
