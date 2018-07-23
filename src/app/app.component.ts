import { Component } from '@angular/core';

@Component({
  selector:'app-root',
  template:`
  <header>
  <h1> My Angular journey </h1>
  <nav>
       <a href="#">Home</a>
       <a href="#">Services</a>
       <a href="#">Contactus</a>
  </nav>
  </header>
  <hr/>
  `,
  styleUrls:['./app.component.css']
})

export class AppComponent{

}
