import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {VilleService} from "../../services/ville/ville.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-ville',
  templateUrl: './add-ville.component.html',
  styleUrls: ['./add-ville.component.css']
})
export class AddVilleComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private villeService: VilleService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  formVille: FormGroup = this.formBuilder.group({
    nom: ['', Validators.required],
  });

  addVille(): void {
    if (this.formVille.valid) {
      const formVille = this.formVille.value;
      console.log(formVille);
      this.villeService.createVille(formVille).subscribe(
        (data) => {
          console.log('Ville créée avec succès:', data);
          this.router.navigate(['/dashboard']);
          // Redirect to dashboard page or another appropriate page
        },
        (error) => {
          console.error('Error creating city:', error);
        }
      );
    } else {
      console.log('The form is not valid. Please correct it before submitting.');
    }

  }

}
