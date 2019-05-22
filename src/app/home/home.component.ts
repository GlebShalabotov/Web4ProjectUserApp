import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Person} from '../person';
import {timer} from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  persons: Person[];
  selectedPerson: Person;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.getPersons();
  }

  selectPerson(person: Person): void {
    this.selectedPerson = person;
  }

  getPersons(): void {
    timer(0, 2500)
      .subscribe(() => {
        this.data.getPersons().subscribe(data =>  this.persons = data);

      });
  }

  postStatus(id: string, status: string) {
    this.data.postData(id, status);
    this.data.getPersons().subscribe(data => {
      this.persons = data;
    });
  }

}
