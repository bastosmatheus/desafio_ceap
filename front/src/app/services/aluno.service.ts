import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aluno } from '../types/aluno.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  constructor(private httpClient: HttpClient) {}

  public async getAll(): Promise<Observable<Aluno[]>> {
    const alunos = this.httpClient.get<Aluno[]>('http://localhost:3000/alunos');

    return alunos;
  }

  public async create(nome: string, email: string, data_nascimento: string) {
    const data = { nome, email, data_nascimento };

    const aluno = this.httpClient
      .post<Aluno>('http://localhost:3000/alunos', data)
      .subscribe((data) => {
        return data;
      });

    return aluno;
  }

  public async remove(id: number) {
    const aluno = this.httpClient
      .delete<Aluno>(`http://localhost:3000/alunos/${id}`)
      .subscribe((data) => {
        return data;
      });

    return aluno;
  }
}
