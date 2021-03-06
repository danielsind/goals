import { Injectable } from '@angular/core';
import {Goal} from '../goal';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  goals:Goal[]=[
    new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', new Date(2019, 2, 3)),
    new Goal(2, 'Buy Cookies', 'I have to buy cookies for the parrot', new Date(2019, 4, 12)),
    new Goal(3, 'Get new Phone Case', 'Diana has her birthday coming up soon', new Date(2019, 6, 16)),
    new Goal(4, 'Get Dog Food', 'Pupper likes expensive snacks', new Date(2020, 3, 15)),
    new Goal(5, 'Solve math homework', 'Damn Math', new Date(2020, 8, 21)),
    new Goal(6, 'Plot my world domination plan', 'Cause I am an evil overlord', new Date(2019, 12, 12)),
  ];


  getGoals(){
    return this.goals;
  }

  constructor() { }
}
