import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMatriculaComponent } from './table-matricula.component';

describe('TableMatriculaComponent', () => {
  let component: TableMatriculaComponent;
  let fixture: ComponentFixture<TableMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableMatriculaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
