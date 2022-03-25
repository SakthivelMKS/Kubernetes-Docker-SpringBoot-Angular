import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service'

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {



  students: any;
  currentIndex = -1;
  name = '';
  currentStudent = {
    name: '',
    email: '',
    published: false
  };

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.studentService.getAll()
      .subscribe(
        data => {
          this.students = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveTutorials();
    //this.currentStudent = null;
    this.currentIndex = -1;
  }

  setActiveTutorial(student, index): void {
    this.currentStudent = student;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.studentService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveTutorials();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.studentService.findByTitle(this.name)
      .subscribe(
        data => {
          this.students = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
