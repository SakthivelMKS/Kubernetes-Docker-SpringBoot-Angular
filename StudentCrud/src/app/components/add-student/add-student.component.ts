import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service'
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student = {
    name: '',
    email: '',
    published: false
  };
  submitted = false;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  saveStudent(): void {
    const data = {
      name: this.student.name,
      email: this.student.email
    };

    this.studentService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newStudent(): void {
    this.submitted = false;
    this.student = {
      name: '',
      email: '',
      published: false
    };
  }

}
