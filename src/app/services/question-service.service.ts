import { Injectable } from '@angular/core';
import { Question } from '../models/question';
import { Answer } from '../models/answer';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {
  public questions: Array<Question>;
  private questionId: number;
  constructor() {
    this.questions = [
      new Question(1,"In 1952, Albert Einstein was offered the presidency of which country?",100,[
        new Answer(1,"USA",false),
        new Answer(2,"Israel",true),
        new Answer(3,"Azerbaijan",false),
        new Answer(4,"Great Britain",false),
      ]),
      new Question(2,"What is the name of the character played by Johnny Depp in the Pirates of the Caribbean film series?",200,[
        new Answer(1,"Jhon Doe",false),
        new Answer(2,"Kevin Mccalister",false),
        new Answer(3,"Captain Jack Sparrow",true),
        new Answer(4,"Indiana Jones",false),
     
      ])
    ];
    this.questionId = 3;
  }
  
  public getAll(): Array<Question>{
    return Array.from(this.questions);
  }
}
