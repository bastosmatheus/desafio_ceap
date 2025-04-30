import { Component, inject } from '@angular/core';
import { MatriculaService } from '../../services/matricula.service';
import { Matricula } from '../../types/matricula.type';
import { FormMatriculaComponent } from '../form-matricula/form-matricula.component';

@Component({
  selector: 'app-table-matricula',
  imports: [FormMatriculaComponent],
  templateUrl: './table-matricula.component.html',
  styleUrl: './table-matricula.component.css',
})
export class TableMatriculaComponent {
  matriculaService = inject(MatriculaService);
  matriculas: Matricula[] = [];

  isModalOpen = false;

  async ngOnInit() {
    await (
      await this.matriculaService.getAll()
    ).subscribe((data) => {
      this.matriculas = data;
    });
  }

  public openModal() {
    this.isModalOpen = true;
  }

  public deleteMatricula(event: MouseEvent) {
    const tbody = document.querySelector('tbody') as HTMLTableSectionElement;
    const clickedElement = event.target as HTMLElement;
    const tr = clickedElement.closest('tr') as HTMLTableRowElement;
    const tdId = tr.querySelector('td') as HTMLTableCellElement;
    const id = Number(tdId.textContent);

    const curso = this.matriculaService.remove(id);

    tbody.removeChild(tr);
  }
}
