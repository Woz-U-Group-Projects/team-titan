import { Component, OnInit, Input } from '@angular/core';
import { IssueService } from '../issue.service';
import {ActivatedRoute, Router} from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  issueForm: FormGroup;
  title = '';
  description = '';
  responsible = '';
  severity = '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher()

  constructor(private router: Router, private issue: IssueService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.issueForm = this.formBuilder.group({
      'title' : [null, Validators.required],
      'description' : [null, Validators.required],
      'severity' : [null, Validators.required],
      'responsible' :[null, Validators.required],
      //'_id' : [null, Validators.required],
      //'status' : [null, Validators.required]
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.issue.addIssues(this.issueForm.value)
      .subscribe((res: any) => {
          this.isLoadingResults = false;
          this.router.navigate(['/list']);
        }, (err: any) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}

