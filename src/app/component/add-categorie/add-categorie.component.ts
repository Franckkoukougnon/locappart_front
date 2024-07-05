import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TypeAppartService } from 'src/app/services/typeAppart/type-appart.service';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css'],
})
export class AddCategorieComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private typeAppartService: TypeAppartService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  formCategorie: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
  });

  addCategorie(): void {
    if (this.formCategorie.valid) {
      const formCategorie = this.formCategorie.value;
      console.log(formCategorie);
      this.typeAppartService.createTypeAppart(formCategorie).subscribe(
        (data) => {
          console.log(data);
          console.log('Categorie créée avec succès:', data);
          this.router.navigate(['/dashboard']);
          // Redirect to dashboard page or another appropriate page
        },
        (error) => {
          console.error('Error creating category:', error);
        }
      );
    } else {
      console.log(
        'The form is not valid. Please correct it before submitting.'
      );
    }
  }
}
