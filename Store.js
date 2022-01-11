var Moreitems = document.querySelectorAll('.a')
var Lessitems = document.querySelectorAll('.b')
var Btndelete = document.querySelectorAll('.RemoveItem')
var Btnlike = document.querySelectorAll('.toogle')
var Total = document.querySelector('#tot')
 
for (let i = 0;i<Btndelete.length;i++){
    Btndelete[i].addEventListener('click',function(){
    Btndelete[i].parentElement.parentElement.remove()
    Resultat()
  })
}


for (let i=0;i<Moreitems.length;i++){
    Moreitems[i].addEventListener('click',function(){
    Moreitems[i].parentElement.previousElementSibling.innerHTML++
    Resultat()
  })
}

  
for (let i=0 ; i<Lessitems.length;i++){
  Lessitems[i].addEventListener('click',function(){
      if (Lessitems[i].parentElement.previousElementSibling.innerHTML>0){
      Lessitems[i].parentElement.previousElementSibling.innerHTML--
      Resultat()
    }
  })
}

for(let i = 0;i<Btnlike.length;i++){
    Btnlike[i].addEventListener('click',function(){
    Btnlike[i].classList.toggle('toogle')
  })
}


function Resultat(){
  var prix = document.querySelectorAll('.prix')
  var quanti = document.querySelectorAll('.quant')
  var som = 0 

  for(let i = 0;i<quanti.length;i++){
      som = som + prix[i].innerHTML * quanti[i].innerHTML
  }
  Total.innerHTML = som
}
     