import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatriculaService } from '../../services/matricula.service';
import { Matricula } from '../../types/matricula.type';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-matricula',
  imports: [ReactiveFormsModule],
  templateUrl: './form-matricula.component.html',
  styleUrl: './form-matricula.component.css',
})
export class FormMatriculaComponent {
  @Input() isModalOpen!: boolean;
  @Output() close = new EventEmitter<void>();

  matriculaService = inject(MatriculaService);
  matriculas: Matricula[] = [];

  form = new FormGroup({
    data_matricula: new FormControl<string>('', [Validators.required]),
    status: new FormControl<string>('', [Validators.required]),
    curso_id: new FormControl<number>(0, [Validators.required]),
    aluno_id: new FormControl<number>(0, [Validators.required]),
  });

  public createCurso() {
    if (this.form.valid) {
      const data_matricula = this.form.controls['data_matricula']
        .value as string;
      const status = this.form.controls['status'].value as string;
      const curso_id = this.form.controls['curso_id'].value as number;
      const aluno_id = this.form.controls['aluno_id'].value as number;

      const matricula = this.matriculaService.create(
        data_matricula,
        status,
        curso_id,
        aluno_id,
      );

      this.close.emit();
    }
  }

  public closeModal() {
    this.close.emit();
  }
}
