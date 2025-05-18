import { Routes } from '@angular/router';
import { TableCursoComponent } from './components/table-curso/table-curso.component';
import { TableMatriculaComponent } from './components/table-matricula/table-matricula.component';
import { HomeComponent } from './pages/home/home.component';
import { AlunoComponent } from './pages/aluno/aluno.component';
import { TableAlunoComponent } from './components/table-aluno/table-aluno.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
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
