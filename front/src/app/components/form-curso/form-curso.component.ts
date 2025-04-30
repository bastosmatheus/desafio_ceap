import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Curso } from '../../types/curso.type';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-form-curso',
  imports: [ReactiveFormsModule],
  templateUrl: './form-curso.component.html',
  styleUrl: './form-curso.component.css',
})
export class FormCursoComponent {
  @Input() isModalOpen!: boolean;
  @Output() close = new EventEmitter<void>();

  cursoService = inject(CursoService);
  cursos: Curso[] = [];

  form = new FormGroup({
    nome: new FormControl<string>('', [Validators.required]),
    tipo: new FormControl<string>('', [Validators.required]),
  });

  public createCurso() {
    if (this.form.valid) {
      const nome = this.form.controls['nome'].value as string;
      const tipo = this.form.controls['tipo'].value as string;

      const curso = this.cursoService.create(nome, tipo);

      this.close.emit();
    }
  }

  public closeModal() {
    this.close.emit();
  }
}
