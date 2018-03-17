import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import {TodoVO} from './domian/todo.vo';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class UserService {

  private SERVER:string;
  private headers: HttpHeaders;

  constructor(private http:HttpClient) {
    this.SERVER = `${environment.HOST}`;
    this.headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
  }
  getTodoList(): Observable<TodoVO[]> {
    return  this.http.get<TodoVO[]>(this.SERVER + '/api/todo');
  }

  addTodo(todo: TodoVO): Observable<TodoVO> {
    return this.http.post<TodoVO>(this.SERVER + '/api/todo', todo, {headers: this.headers}); // todo객체를 보냈는데 나머지 파라미터들은 머가 들어 갈까?
  }
}
