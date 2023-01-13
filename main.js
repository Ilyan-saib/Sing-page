let left = document.getElementById('left')
let right = document.getElementById('right')
let image = document.getElementById('image')
let counteur = 3

left.addEventListener('click', ()=>{
  if (counteur <= 1) {
    left.style.backgroundColor = 'grey'
    left.style.borderColor = 'grey'
  }
  else{
    right.style.backgroundColor = 'black'
    right.style.borderColor = 'black'
  counteur--
  image.src = `assets/image-slide-${counteur}.jpg`
  }
});

right.addEventListener('click', ()=>{
    if (counteur >= 5) {
      right.style.backgroundColor = 'grey'
      right.style.borderColor = 'grey'
    }
    else{
        left.style.backgroundColor = 'black'
        left.style.borderColor = 'black'
    counteur++
    image.src = `assets/image-slide-${counteur}.jpg`

    }
 
  });

  






  



  