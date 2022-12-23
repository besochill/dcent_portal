import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {

  accountForm!: UntypedFormGroup;

  constructor(
    private _formBuilder: UntypedFormBuilder) { }
  ngOnInit(): void {
    // Create the form
    this.accountForm = this._formBuilder.group({
      name    : ['Brian Hughes'],
      username: ['brianh'],
      title   : ['Senior Frontend Developer'],
      company : ['YXZ Software'],
      about   : ['Hey! This is Brian; husband, father and gamer. I\'m mostly passionate about bleeding edge tech and chocolate! 🍫'],
      email   : ['hughes.brian@mail.com', Validators.email],
      phone   : ['121-490-33-12'],
      country : ['usa'],
      language: ['english']
    });
  }
}

