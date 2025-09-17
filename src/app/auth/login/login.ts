import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, LucideAngularModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

}
