<<<<<<< HEAD
import { Injectable } from "../../node_modules/@angular/core";
import { HttpClient } from "../../node_modules/@angular/common/http";
=======
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
>>>>>>> 408e9537b5b8ab21c3132c8d9a5924dde28cd7c5
import { Task } from "./models/task";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  // Java Spring Boot uses port 8080
  apiUrl: string = "http://localhost:8080/tasks";

  // C# dotnetcore uses port 5000
  //apiUrl: string = "http://localhost:5000/api/tasks";

  // Express will use port 3000
  //apiUrl: string = "http://localhost:3000/tasks";

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  addTask(task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }
}
