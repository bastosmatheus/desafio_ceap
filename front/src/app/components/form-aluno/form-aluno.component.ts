import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AlunoService } from '../../services/aluno.service';
import { Aluno } from '../../types/aluno.type';

@Component({
  selector: 'app-form-aluno',
  imports: [ReactiveFormsModule],
  templateUrl: './form-aluno.component.html',
  styleUrl: './form-aluno.component.css',
})
export class FormAlunoComponent {
  @Input() isModalOpen!: boolean;
  @Output() close = new EventEmitter<void>();

  alunoService = inject(AlunoService);
  alunos: Aluno[] = [];

  form = new FormGroup({
    nome: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    data_nascimento: new FormControl<string>('', [Validators.required]),
  });

  public createAluno() {
    if (this.form.valid) {
      const nome = this.form.controls['nome'].value as string;
      const email = this.form.controls['email'].value as string;
      const data_nascimento = this.form.controls['data_nascimento']
        .value as string;

      const aluno = this.alunoService.create(nome, email, data_nascimento);

      this.close.emit();
    }
  }

  public closeModal() {
    this.close.emit();
  }
}
