import { Component, inject } from '@angular/core';
import { PasswordModule } from "primeng/password";
import { FormsModule } from "@angular/forms";
import { CheckboxModule } from "primeng/checkbox";
import { LayoutService } from "../../../../../layout/service/layout.service";
import { RouterLink } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { ChipsModule } from "primeng/chips";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    PasswordModule,
    FormsModule,
    CheckboxModule,
    RouterLink,
    ButtonModule,
    RippleModule,
    ChipsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  valCheck: string[] = ['remember'];

  password!: string;

}
