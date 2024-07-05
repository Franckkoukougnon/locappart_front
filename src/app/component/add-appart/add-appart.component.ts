import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Appartement } from 'src/app/model/appartement.model';
import { Categorie } from 'src/app/model/categorie.model';
import { PartialAppartement } from 'src/app/model/partialAppartement.model';
import { CategorieService } from 'src/app/services/categorie/categorie.service';
import { AppartementService } from 'src/app/services/appartement/appartement.service';
import { Bailleur } from '../../model/bailleur.model';
import { BailleurService } from '../../services/bailleur/bailleur.service';
import { Ville } from '../../model/ville.model';
import { VilleService } from '../../services/ville/ville.service';

@Component({
  selector: 'app-add-appart',
  templateUrl: './add-appart.component.html',
  styleUrls: ['./add-appart.component.css'],
})
export class AddAppartComponent implements OnInit {
  // Déclaration des variables

  categories: Categorie[] = [];
  bailleurs: Bailleur[] = [];
  villes: Ville[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private appartementService: AppartementService,
    private categorieService: CategorieService,
    private bailleurService: BailleurService,
    private router: Router,
    private villeService: VilleService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadBailleur();
    this.loadVille();
  }

  formAppart: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    bailleur: ['', Validators.required],
    ville: ['', Validators.required],
    categorie: ['', Validators.required],
    loyer: ['', Validators.required],
    nbChambres: ['', Validators.required],
    nbSallesDeBain: ['', Validators.required],
    imageUrl: ['', Validators.required],
    imageUrl2: ['', Validators.required],
    imageUrl3: ['', Validators.required],
  });

  loadCategories(): void {
    this.categorieService.getCategorie().subscribe(
      (data: Categorie[]) => {
        this.categories = data;
      },
      (error) => {
        console.error('Error fetching categories: ', error);
      }
    );
  }

  loadVille(): void {
    this.villeService.getVille().subscribe(
      (data: Ville[]) => {
        this.villes = data;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching villes: ', error);
      }
    );
  }

  loadBailleur(): void {
    this.bailleurService.getAllBailleur().subscribe(
      (data: Bailleur[]) => {
        this.bailleurs = data;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching categories: ', error);
      }
    );
  }

  addAppartement(): void {
    if (this.formAppart.valid) {
      const formData = this.formAppart.value;
      console.log(formData);
      formData.categorie = Number(formData.categorie);
      console.log(formData);
      this.appartementService.createAppartement(formData).subscribe(
        (data: Appartement) => {
          console.log('Appartement créé avec succès:', data);
          this.router.navigate(['/dashboard']);
          // Redirigez vers la page de tableau de bord ou une autre page appropriée
        },
        (error) => {
          console.error("Erreur lors de la création de l'appartement:", error);
        }
      );
    } else {
      console.log(
        "Le formulaire n'est pas valide. Veuillez le corriger avant de soumettre."
      );
    }
  }
}
