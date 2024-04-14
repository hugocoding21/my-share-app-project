import { Component, Input, OnInit } from '@angular/core';

interface Sexe {
  name: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  values: Sexe[] = [];
  selectedValue?: Sexe;
  @Input() public firstname: string = '';
  @Input() public lastname: string = '';
  @Input() public username: string = '';
  @Input() public email: string = '';
  @Input() public phone: string = '';
  @Input() public birthDate: Date = new Date();
  @Input() public confirmPassword: string = '';
  @Input() public password: string = '';
  @Input() public sexe = this.values;
  date = new Date();

  ngOnInit(): void {
    this.values = [{ name: 'Femme' }, { name: 'Homme' }];
  }
}
