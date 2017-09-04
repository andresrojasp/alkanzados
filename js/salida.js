/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
logFuera.addEventListener('click', e => {
        firebase.auth().signOut();
    });
firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            //console.log(firebaseUser);
            logFuera.classList.remove('hide');
            logIn.classList.add('hide');
        } else {
            //console.log(firebaseUser);
            logFuera.classList.add('hide');
            logIn.classList.remove('hide');
        }
    });



