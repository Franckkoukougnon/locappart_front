import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BailleurService} from "../../services/bailleur/bailleur.service";
import {Appartement} from "../../model/appartement.model";
import {Bailleur} from "../../model/bailleur.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-bailleur',
  templateUrl: './add-bailleur.component.html',
  styleUrls: ['./add-bailleur.component.css']
})
export class AddBailleurComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private bailleurService: BailleurService,
    private router: Router
  ) {
  }

  ngOnInit() {}

  formBailleur: FormGroup = this.formBuilder.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    email:['', Validators.required],
    telephone: ['', Validators.required],
  });


  addBailleur(): void {
    if (this.formBailleur.valid) {
      const formBailleur = this.formBailleur.value;
      console.log(formBailleur);
      this.bailleurService.createBailleur(formBailleur).subscribe(
        (data: Bailleur) => {
          console.log('Bailleur créé avec succès:', data);
          this.router.navigate(['/dashboard']);
          // Redirigez vers la page de tableau de bord ou une autre page appropriée
        },
        (error) => {
          console.error('Erreur lors de la création de l\'appartement:', error);
        }
      );
    } else {
      console.log('Le formulaire n\'est pas valide. Veuillez le corriger avant de soumettre.');
    }
  }

}
