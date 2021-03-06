import {Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Product } from '../adminShared/product';

@Injectable()

export class ProductAdminService{
    createProduct(prod: Product){
        let storageRef = firebase.storage().ref();
        storageRef.child(`product_images/${prod.imgTitle}`).putString(prod.img, 'base64')
            .then((snapshot) => {
                let url = snapshot.metadata.downloadURLs[0];
                let dbRef = firebase.database().ref('products/');
                let newProd = dbRef.push();
                newProd.set({
                    name: prod.name,
                    desc: prod.description,
                    imgTitle: prod.imgTitle,
                    img: url,
                    price: prod.price,
                    id: newProd.key
                });
            })
            .catch((error) => {
                alert(`failed to upload: ${error}`)
            });
        }    

    editProduct(update: Product){
        let dbRef = firebase.database().ref('products/').child(update.id)
        .update({
            name: update.name,
            desc: update.description,
            price: update.price
        });
        alert('PRODUCT UPDATED');
    }

    //need to change this to deleteProduct once that method is created 
    removeProduct(deletePost: Product){
        let dbRef = firebase.database().ref('products/').child(deletePost.id).remove();
        alert('product deleted');
        let imageRef = firebase.storage().ref().child(`product_images/${deletePost.imgTitle}`)
            .delete()
                .then(function() {
                    alert(`${deletePost.imgTitle} was deleted from storage`);
                }).catch(function(error) {
                    alert(`Error - Unable to delete ${deletePost.imgTitle}`);
                });
    }
}