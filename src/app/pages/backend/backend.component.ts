import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-backend',
  imports: [ReactiveFormsModule],
  templateUrl: './backend.component.html',
  styleUrl: './backend.component.scss'
})
export class BackendComponent {
  articleForm: FormGroup;
  blogForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.articleForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', [Validators.required, Validators.pattern('(http[s]?:\\/\\/.*\\.(?:png|jpg|jpeg|gif|svg))')]],
      articleUrl: ['', [Validators.required, Validators.pattern('(http[s]?:\\/\\/.*)')]]
    });
  
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      banner: ['', [Validators.required, Validators.pattern('(http[s]?:\\/\\/.*\\.(?:png|jpg|jpeg|webp|gif|svg))')]],
      description: ['', Validators.required],
      fullArticle: ['', Validators.required]
    });
  }

  onSubmitNews() {
    if (this.articleForm.valid) {
      console.log(this.articleForm.value);
      // You can emit or send this data to a backend API
    }
  }




  onSubmitBlog() {
    if (this.blogForm.valid) {
      console.log(this.blogForm.value);
      // Send this to the backend or emit to parent component
    }
  }
}
