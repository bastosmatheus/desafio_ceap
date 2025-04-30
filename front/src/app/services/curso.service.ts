import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from '../types/curso.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  constructor(private httpClient: HttpClient) {}

  public async getAll(): Promise<Observable<Curso[]>> {
    const cursos = this.httpClient.get<Curso[]>('http://localhost:3000/cursos');

    return cursos;
  }

  public async create(nome: string, tipo: string) {
    const data = { nome, tipo };

    const aluno = this.httpClient
      .post<Curso>('http://localhost:3000/cursos', data)
      .subscribe((data) => {
        return data;
      });

    console.log(aluno);

    return aluno;
  }

  public async remove(id: number) {
    const aluno = this.httpClient
      .delete<Curso>(`http://localhost:3000/cursos/${id}`)
      .subscribe((data) => {
        return data;
      });

    return aluno;
  }
}
