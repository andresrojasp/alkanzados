/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var database = firebase.database();

var refResultados = database.ref('imagenes');
var ulLista = document.getElementById('lista');

refResultados.on('child_added', function(ss){
    var imagen = ss.val();
    var li = document.createElement('li');
    li.innerText = 'La imagen : ' + imagen.imagen +  ' tiene : ' + imagen.voto + ' votos';
    li.id = ss.key;
    ulLista.appendChild(li);
    
});

refResultados.on('child_changed', function(ss){
    var imagen = ss.val();
    var liChanged = document.getElementById('ss.key');
    //console.log(liChanged.id);
    liChanged.innerText = 'La imagen : ' + imagen.imagen +  ' tiene : ' + imagen.voto + ' votos';
    liChanged.innerText = ss.val();
});

refResultados.on('child_removed', function(ss){
    var imagen = ss.val();
    var liRemoved = document.getElementById('ss.key');
    liRemoved.remove();
});

