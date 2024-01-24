import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOnePageBlogPageComponent } from './my-one-page-blog-page.component';

describe('MyOnePageBlogPageComponent', () => {
  let component: MyOnePageBlogPageComponent;
  let fixture: ComponentFixture<MyOnePageBlogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyOnePageBlogPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyOnePageBlogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
