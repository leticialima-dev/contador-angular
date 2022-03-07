import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 
    title = 'Contador';
    numero : number = 0;
  
    incrementar(): void {
      this.numero = this.numero + 1
    }
  
    decrementar(): void{
      if(this.numero > 0){
      this.numero = this.numero - 1
      }

    }
  
}
