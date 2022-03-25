import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
 
  currentStudent = {
    name: '',
    email: '',
    published: false
  };
  message = '';

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }

  getTutorial(id): void {
    this.studentService.get(id)
      .subscribe(
        data => {
          this.currentStudent = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status): void {
    const data = {
      title: this.currentStudent.name,
      description: this.currentStudent.email,
      published: status
    };

    this.studentService.update(this.currentStudent.name, data)
      .subscribe(
        response => {
          this.currentStudent.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateTutorial(): void {
    this.studentService.update(this.currentStudent.name, this.currentStudent)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTutorial(): void {
    this.studentService.delete(this.currentStudent.name)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/tutorials']);
        },
        error => {
          console.log(error);
        });
  }

}
