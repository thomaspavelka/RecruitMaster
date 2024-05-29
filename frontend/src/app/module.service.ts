import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Subitem {
  name: string;
  actions: string[];
}

export interface Module {
  name: string;
  subitems: Subitem[];
}

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  private apiUrl = 'http://localhost:8000/modules';

  constructor(private http: HttpClient) {}

  getModules(): Observable<Module[]> {
    return this.http.get<Module[]>(this.apiUrl);
  }

  getModule(id: string): Observable<Module> {
    return this.http.get<Module>(`${this.apiUrl}/${id}`);
  }

  createModule(module: Module): Observable<Module> {
    return this.http.post<Module>(this.apiUrl, module);
  }

  updateModule(id: string, module: Module): Observable<Module> {
    return this.http.put<Module>(`${this.apiUrl}/${id}`, module);
  }

  deleteModule(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
