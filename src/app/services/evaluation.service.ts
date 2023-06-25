import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor(private httpClient: HttpClient) { 

  
}
 getQuestions(){
   return this.httpClient.get<any>("assets/questions.json")
 }

}