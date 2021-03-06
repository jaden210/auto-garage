import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css']
})
export class GarageComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;
  newCar: Car = new Car();

  constructor(public aService: AppService, private db: AngularFirestore) { }

  ngOnInit() {
    this.aService.afAuth.authState.subscribe(user => {
      if(user) {
        this.itemsCollection = this.db.collection<any>('garage-items', ref => ref.where('userId', '==', user.uid));
        this.items = this.itemsCollection.valueChanges();
      }
    });
  }

  createCar() {
    this.itemsCollection.add(JSON.parse(JSON.stringify(this.newCar)));
  }

}

export class Car {
  id: any;
  make: string = "test";
  model: string;
  year: string;
  generation: string;
  mods: string;
  engine: string;
  trim: string;
  disabledAt: Date;
}
