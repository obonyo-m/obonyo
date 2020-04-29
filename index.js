//Navbar items collapse back on click
$('.nav-link').on('click',function() {
    $('.navbar-collapse').collapse('hide');
  })

//Modal functions
let modal = document.getElementById('modal');
let modalheader = document.getElementById('modalHeader');
let modalcontent = document.getElementById('modalContent');
modalcontent.style.width = '100%';
let modalfooter = document.getElementById('modalFooter');

modal.onclick = function(){
modal.style.display = 'none';
}

function modalone(imej){
  document.getElementById('modal').style.display = 'block';
  modalheader.innerHTML = 'Elements of Design';
  modalcontent.src = imej.src;
  modalfooter.innerHTML = 'This project demonstrated the use of colour, line and value to express different levels of intensity and suggest movement.'
}
function modaltwo(imej){
  document.getElementById('modal').style.display = 'block';
  modalheader.innerHTML = 'Deconstructing the Colour Wheel';
  modalcontent.src = imej.src;
  modalfooter.innerHTML = 'Here the colour wheel was torn apart and reassembled like a collage of shredded paper'
}
function modalthree(imej){
  document.getElementById('modal').style.display = 'block';
  modalheader.innerHTML = 'Composition';
  modalcontent.src = imej.src;
  modalfooter.innerHTML = 'Using objects around studio, we studied sketching from life'
}
function modalfour(imej){
  document.getElementById('modal').style.display = 'block';
  modalheader.innerHTML = 'Elements of Design';
  modalcontent.src = imej.src;
  modalfooter.innerHTML = 'Monochrome curves wer utilized to portray a feeling of dynamism.'
}
function modalfive(imej){
  document.getElementById('modal').style.display = 'block';
  modalheader.innerHTML = 'Elements of Design';
  modalcontent.src = imej.src;
  modalfooter.innerHTML = 'Straight lines were used to create a feeling of instability while at the same time giving a sense of balance'
}
function modalsix(imej){
  document.getElementById('modal').style.display = 'block';
  modalheader.innerHTML = 'Monogram';
  modalcontent.src = imej.src;
  modalfooter.innerHTML = 'Using the initials of our names, I created a monogram and blended it with the other elements of design we had studied'
}

