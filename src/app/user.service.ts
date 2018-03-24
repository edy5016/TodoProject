import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import {TodoVO} from './domian/todo.vo';
import {Observable} from 'rxjs/Observable';
import {ResultVO} from './domian/result.vo';


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
  modifyTodo(todo: TodoVO): Observable<TodoVO> {
    return this.http.put<TodoVO>(this.SERVER + '/api/todo', todo, {headers: this.headers});
  }
  removeTodo(todo_id: number): Observable<ResultVO> {
    return this.http.delete<ResultVO>(this.SERVER + `/api/todo?todo_id=${todo_id}`);
  }
}
