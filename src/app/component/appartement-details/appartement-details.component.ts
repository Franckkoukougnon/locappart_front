import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap } from '@angular/router';
import { Appartement } from 'src/app/model/appartement.model';
import { AppartementService } from 'src/app/services/appartement/appartement.service';



@Component({
  selector: 'app-appartement-details',
  templateUrl: './appartement-details.component.html',
  styleUrls: ['./appartement-details.component.css'],

})


export class AppartementDetailsComponent implements OnInit {

@Input()  selectedAppartement: any;



  constructor(private route: ActivatedRoute,
    private appartementService: AppartementService) { }


    ngOnInit(): void {
      this.route.paramMap.subscribe(params =>{
        const id = params.get('id');
        console.log('ID récupéré depuis les paramètres de l\'URL : ', id)
        if(id){
          const appartId = parseInt(id);
          this.appartementService.getAppartementById(appartId).subscribe(
            (appartement: Appartement) => {
              console.log('Appartement récupéré depuis le service : ', appartement.id);
              this.selectedAppartement = appartement;
            },
            (error) => {
              console.log('Erreur lors de la récupération de l\'appartement : ', error);
            }
          )
        }
      })

    }






}


