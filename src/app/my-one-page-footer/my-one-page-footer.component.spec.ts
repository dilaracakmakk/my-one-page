import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOnePageFooterComponent } from './my-one-page-footer.component';

describe('MyOnePageFooterComponent', () => {
  let component: MyOnePageFooterComponent;
  let fixture: ComponentFixture<MyOnePageFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyOnePageFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyOnePageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
