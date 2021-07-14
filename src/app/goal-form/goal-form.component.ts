import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

  goal = new Goal(0,"","", new Date())

  @Output() newGoal = new EventEmitter<Goal>()

  submitGoal(form) {
    this.newGoal.emit(this.goal)
    this.goal = new Goal(0,"","", new Date()) 
    form.reset();
    
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
