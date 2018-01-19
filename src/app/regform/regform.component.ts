import { Component, OnInit } from '@angular/core';
import { Reg }    from '../reg';
@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent implements OnInit {

  powers = ['Proprietorship',
              'LLP',
              'OPC',
              'Private Limited',
                'Public Limited',
                'Other'
    ];
  
    states=['Tamilnadu','Telangana'];
  model = new Reg(this.states[0], this.powers[0], '');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Reg('', '', '');
  }
  ngOnInit() {}

}
