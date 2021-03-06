import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config/config.service';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public apiKeyForm: FormGroup;
  constructor(private _configService: ConfigService, public formBuilder: FormBuilder, public titleService: Title) {

    //set the page title
    titleService.setTitle('Almost ready');

    //prepare the api form
    this.apiKeyForm = formBuilder.group(
      {
        'apiKey': ['', Validators.required]
      },
      // { validator: this.APIKeyValidator }
    );
  }

  ngOnInit() {
  }

  /**
   * Set the API key in the configService
   */
  setApiKey() {
    if (this.apiKeyForm.controls['apiKey'].value) {
      this._configService.whenHubApiKey = this.apiKeyForm.controls['apiKey'].value;
    }
    return;
  }

}
