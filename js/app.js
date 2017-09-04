/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyBanyeNNljp8pRJoB6TQpL6SQXt0yXiOIo",
        authDomain: "arojasalakanza.firebaseapp.com",
        databaseURL: "https://arojasalakanza.firebaseio.com",
        projectId: "arojasalakanza",
        storageBucket: "arojasalakanza.appspot.com",
        messagingSenderId: "613732145628"
    };
    firebase.initializeApp(config);
//  
//  //obtener elementos
//  const preObjetct = document.getElementById('objeto');
//  const ulList = document.getElementById('lista');
//  
//  //referencia a la base de datos
//  const dbRefObject = firebase.database().ref().child('objeto');
//  const dbrefList = dbRefObject.child('Habilidades');
//  
//  
////sincronizar cambios en el objeto
//  //dbRefObject.on('value', snap => console.log(snap.val()));
//  dbRefObject.on('value', snap => {
//      preObjetct.innerText = JSON.stringify(snap.val(), null, 3);
//  });    
////sincronizar cambios en la lista
//    //dbrefList.on('child_added', snap => console.log(snap.val()));
//  dbrefList.on('child_added', snap => {
//      const li = document.createElement('li');
//      li.innerText = snap.val(); 
//      li.id = snap.key;
//      ulList.appendChild(li);
//  });
//  
//  dbrefList.on('child_changed', snap => {
//      const liChanged = document.createElement('snap.key');
//      liChanged.innerText = snap.val(); 
//      
//  });
//  
//  dbrefList.on('child_removed', snap => {
//      const liRemoved = document.createElement('snap.key');
//      liRemoved.remove(); 
//      
//  });

}());

  