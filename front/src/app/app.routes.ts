import { Routes } from '@angular/router';
import { TableAlunoComponent } from './components/table-aluno/table-aluno.component';
import { TableCursoComponent } from './components/table-curso/table-curso.component';
import { TableMatriculaComponent } from './components/table-matricula/table-matricula.component';

export const routes: Routes = [
  {
    path: 'alunos',
    component: TableAlunoComponent,
  },

  {
    path: 'cursos',
    component: TableCursoComponent,
  },

  {
    path: 'matriculas',
    component: TableMatriculaComponent,
  },
];
