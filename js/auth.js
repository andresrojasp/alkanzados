/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    const txtEmail = document.getElementById('username');
    const txtPassw = document.getElementById('password');
    const btnLogin = document.getElementById('btnLogin');
    const btnLogou = document.getElementById('btnLogou');
    const logFuera = document.getElementById('logFuera');
    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassw.value;
        const autentica = firebase.auth();


        const promise = autentica.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));


    });

    btnLogou.addEventListener('click', e => {
        firebase.auth().signOut();
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            btnLogou.classList.remove('hide');
            window.location.replace("/alkdos/test.php");
        } else {
            //console.log(firebaseUser);
            btnLogou.classList.add('hide');
        }
    });

}());

  