import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Protien } from '../data/protien';

@Injectable({
  providedIn: 'root',
})
export class ProtienService {
  private dbPath = 'Proteins';

  proteinsRef: AngularFirestoreCollection<Protien>;

  constructor(private db: AngularFirestore) {
    this.proteinsRef = this.db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Protien> {
    return this.proteinsRef;
  }

  create(tutorial: Protien): any {
    tutorial.image = 'assets/images/pro3.png';
    return this.proteinsRef.add({ ...tutorial });
  }

  update(id: string, data: any): Promise<void> {
    return this.proteinsRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.proteinsRef.doc(id).delete();
  }
}
