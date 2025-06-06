import { Component } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';

@Component({
    selector: 'app-root',
    template: '<h1>Firebase Test</h1>',
    styleUrls: ['./app.css']
})
export class AppComponenet {
    constructor(private firestore: Firestore) {
        this.testFirestore();
    }

    async testFirestore() {
        const collectionRef = collection(this.firestore, 'testCollection');
        const snapshot = await getDocs(collectionRef);
        console.log('Firebase Connected:', snapshot.docs.map(doc => doc.data()));
    }
}