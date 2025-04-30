import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Matricula } from '../types/matricula.type';

@Injectable({
  providedIn: 'root',
})
export class MatriculaService {
  constructor(private httpClient: HttpClient) {}

  public async getAll(): Promise<Observable<Matricula[]>> {
    const matriculas = this.httpClient.get<Matricula[]>(
      'http://localhost:3000/matriculas',
    );

    return matriculas;
  }

  public async create(
    data_matricula: string,
    status: string,
    curso_id: number,
    aluno_id: number,
  ) {
    const data = { data_matricula, status, curso_id, aluno_id };

    const matricula = this.httpClient
      .post<Matricula>('http://localhost:3000/matriculas', data)
      .subscribe((data) => {
        return data;
      });

    return matricula;
  }

  public async remove(id: number) {
    const aluno = this.httpClient
      .delete<Matricula>(`http://localhost:3000/matriculas/${id}`)
      .subscribe((data) => {
        return data;
      });

    return aluno;
  }
}
