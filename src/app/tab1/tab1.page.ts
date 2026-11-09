
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCol,
  IonGrid,
  IonRow,
    IonInput, 
    IonItem, 
    IonList,
    IonButton
} from '@ionic/angular';

import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCol,
    IonGrid,
    IonRow,
    ExploreContainerComponent,
    IonInput, 
    IonItem, 
    IonList,
    IonButton,
    FormsModule
  ],
})

export class Tab1Page {
  constructor(private alertController: AlertController) {}

  numeros: string = '';
  v2: number = 0;  //primeiro numero
   operador: string = '';

  adicionarNumero(numero: string) {
    this.numeros += numero;
  }

  calcular() {
   if(/[^0-9]/.test(this.numeros))
   {
  this.erro('Digite somente numeros!');
  return;
   }
    if(this.operador === '')
    {
       this.v2 = Number(this.numeros);
       this.numeros = '';
    }
    else 
    {
      //colocar a decisao de botao
      const n = Number(this.numeros);
      let res : number = 0;

      if(this.operador ==='+')
      {
        res = this.v2 + n ;
      }
      else if(this.operador ==='-')
      {
        res = this.v2 - n;
      }
      else if(this.operador ==='/')
       {res = this.v2 / n;} 
      else if(this.operador ==='*')
      {
        res =  this.v2 * n;
      }
      else if (this.operador ==='**')
      {
        res = Math.pow(this.v2, n)
      }

      this.numeros = res.toString();
      this.v2 = res;
      this.operador = '';
    }
  }

  apagar() {
    this.numeros = '';
    this.v2 = 0;
    this.operador = '';
  }

  OperadordeSoma() {
   this.v2 = Number(this.numeros);
   this.operador = '+';
   this.numeros = '';
  }

  OperadordeSubtracao() {
   this.v2 = Number(this.numeros);
   this.operador = '-';
   this.numeros = '';
  }

  OperadordeDivisao() {
    this.v2 = Number(this.numeros);
   this.operador = '/';
   this.numeros = '';
  }

  OperadordeMultiplicacao() {
    this.v2 = Number(this.numeros);
   this.operador = '*';
   this.numeros = '';
  }

  OperadordePotencia() {
   this.v2 = Number(this.numeros);
   this.operador = '**';
   this.numeros = '';
  }
  async erro(mensagem: string) {
  const alerta = await this.alertController.create({
    header: 'Erro!',
    message: mensagem,
    buttons: ['enter']
  });

  await alerta.present();
}
}




