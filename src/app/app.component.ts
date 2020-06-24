import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {  
  ngOnInit() {
    particlesJS.load('app-particles', 'assets/particles.json', function() {
      console.log('callback - app particles config loaded');
    });  
  }
}
