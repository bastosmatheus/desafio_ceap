import { Component, inject, OnInit } from '@angular/core';
import { AlunoService } from '../../services/aluno.service';
import { Aluno } from '../../types/aluno.type';
import { FormAlunoComponent } from '../form-aluno/form-aluno.component';

@Component({
  selector: 'app-table-aluno',
  imports: [FormAlunoComponent],
  templateUrl: './table-aluno.component.html',
  styleUrl: './table-aluno.component.css',
})
export class TableAlunoComponent implements OnInit {
  isModalOpen = false;
  alunoService = inject(AlunoService);
  alunos: Aluno[] = [];

  async ngOnInit() {
    await (
      await this.alunoService.getAll()
    ).subscribe((data) => {
      this.alunos = data;
    });
  }

  public openModal() {
    this.isModalOpen = true;
  }

  public deleteAluno(event: MouseEvent) {
    const tbody = document.querySelector('tbody') as HTMLTableSectionElement;
    const clickedElement = event.target as HTMLElement;
    const tr = clickedElement.closest('tr') as HTMLTableRowElement;
    const tdId = tr.querySelector('td') as HTMLTableCellElement;
    const id = Number(tdId.textContent);

    const aluno = this.alunoService.remove(id);

    tbody.removeChild(tr);
  }
}
