import { Injectable } from '@angular/core'

import {
    CanActivate,
    Router, 
    ActivatedRouteSnapshot, 
    RouterStateSnapshot
} from '@angular/router'
import * as firebase from 'firebase';

@Injectable ()
export class UserService implements CanActivate{
    
    userLoggedIn: boolean = false;
    loggedInUser: string;
    authUser: any;

    constructor (private router : Router) {
        firebase.initializeApp({
            apiKey: "AIzaSyAFtcpefhAi6SX7nQo4lgUh53vQReHpr5w",
            authDomain: "angular2sampleproject.firebaseapp.com",
            databaseURL: "https://angular2sampleproject.firebaseio.com",
            projectId: "angular2sampleproject",
            storageBucket: "angular2sampleproject.appspot.com",
            messagingSenderId: "449344795567"
        })
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        let url: string = state.url;
        return this.verifyLogin(url);
    }

    verifyLogin(url: string) : boolean {
        if(this.userLoggedIn) {
            return true
        }

        this.router.navigate(['/admin/login']);
        return false;
    }

    register(email: string, password: string){
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) { 
            alert (`${error.message} Could not create an account`);
        });
    }

    verifyUser(){
        this.authUser = firebase.auth().currentUser;

        if(this.authUser)
        {
            alert(`Welcome ${this.authUser.email}`);
            this.loggedInUser = this.authUser.email;
            this.userLoggedIn = true;
            this.router.navigate(['/admin'])
        }
    }

    login(loginEmail: string, loginPassword: string){
        firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword).catch(function(error) { 
            alert (`${error.message} Unable to log in please Try Again!`);
        });
    }

    logout(){
        this.userLoggedIn = false;
        firebase.auth().signOut().then(function() {
            alert('Logged Out');
         }, function() {
            alert('Unable to log out please try again')
        });
    }
}

