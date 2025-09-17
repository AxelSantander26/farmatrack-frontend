import { Component } from '@angular/core';
import { Login } from "../../../auth/login/login";

@Component({
  selector: 'app-public-layout',
  imports: [Login],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.css'
})
export class PublicLayout {

}
