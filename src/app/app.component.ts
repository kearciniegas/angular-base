import { Component } from '@angular/core';
import { Item } from '@ceiba/navbar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.']
})
export class AppComponent {
  title = 'app-base';
  public companies: Item[] = [
    { url: '/home', nombre: 'home' },
    { url: '/producto', nombre: 'producto' }
    
  ];

  
}
