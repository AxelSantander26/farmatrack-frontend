import { Component } from '@angular/core';
import { Sidebar } from "../../sidebar/sidebar";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-private-layout',
  imports: [Sidebar, RouterOutlet],
  templateUrl: './private-layout.html',
  styleUrl: './private-layout.css'
})
export class PrivateLayout {

}
