import { Component, inject } from '@angular/core';
import { CursoService } from '../../services/curso.service';
import { Curso } from '../../types/curso.type';
import { FormCursoComponent } from '../form-curso/form-curso.component';

@Component({
  selector: 'app-table-curso',
  imports: [FormCursoComponent],
  templateUrl: './table-curso.component.html',
  styleUrl: './table-curso.component.css',
})
export class TableCursoComponent {
  cursoService = inject(CursoService);
  cursos: Curso[] = [];

  isModalOpen = false;

  async ngOnInit() {
    await (
      await this.cursoService.getAll()
    ).subscribe((data) => {
      this.cursos = data;
    });
  }

  public openModal() {
    this.isModalOpen = true;
  }

  public deleteCurso(event: MouseEvent) {
    const tbody = document.querySelector('tbody') as HTMLTableSectionElement;
    const clickedElement = event.target as HTMLElement;
    const tr = clickedElement.closest('tr') as HTMLTableRowElement;
    const tdId = tr.querySelector('td') as HTMLTableCellElement;
    const id = Number(tdId.textContent);

    const curso = this.cursoService.remove(id);

    tbody.removeChild(tr);
  }
}
