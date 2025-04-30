import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TableAlunoComponent } from './components/table-aluno/table-aluno.component';
import { FormAlunoComponent } from './components/form-aluno/form-aluno.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private router: Router) {}

  title = 'Desafio CEAP';

  public isRouteHome() {
    return this.router.url === '/';
  }
}
