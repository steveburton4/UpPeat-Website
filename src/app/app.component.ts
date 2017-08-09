import { Component } from '@angular/core';

export class User {
  id: number;
  name: string;
}

const USERS: User[] = [
  { id: 1, name: 'Mr. Nice' },
  { id: 2, name: 'Narco' },
  { id: 3, name: 'Bombasto' },
  { id: 4, name: 'Celeritas' },
  { id: 5, name: 'Magneta' },
  { id: 6, name: 'RubberMan' },
  { id: 7, name: 'Dynama' },
  { id: 8, name: 'Dr IQ' },
  { id: 9, name: 'Magma' },
  { id: 10, name: 'Tornado' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <h1>{{title}}</h1>
    <h2>Users</h2>
    <ul class="users">
      <li *ngFor="let user of users"
      [class.selected]="user === selectedUser"
      (click)="onSelect(user)">
        <span class="badge">{{user.id}}</span> {{user.name}}
      </li>
    </ul>
    <div *ngIf="selectedUser">
      <h2>{{selectedUser.name}} details!</h2>
      <div><label>id: </label>{{selectedUser.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedUser.name" placeholder="name">
      </div>
    </div>`,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .users {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .users li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .users li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .users li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .users .text {
      position: relative;
      top: -3px;
    }
    .users .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

export class AppComponent {
  title = 'UpPeat';
  selectedUser: User;
  users = USERS;

  onSelect(user: User): void {
    this.selectedUser = user;
  }
}
