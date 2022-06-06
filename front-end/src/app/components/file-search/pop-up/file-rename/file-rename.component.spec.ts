import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileRenameComponent } from './file-rename.component';

describe('FileRenameComponent', () => {
  let component: FileRenameComponent;
  let fixture: ComponentFixture<FileRenameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileRenameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileRenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
