let headerCamera = document.getElementById('truestory-logo');


let closeModalBtn = document.getElementsByClassName('close');

let workspace = document.querySelector('.workspace');

let places = workspace.children;
let cards = document.querySelectorAll('#js-card');



let whiteboard = document.querySelector('.modal-whiteboard');
let modalW = document.getElementById('modalWindow');
let cardImages = document.getElementsByClassName('card-image');
let cardCaption = document.getElementsByClassName('image-caption');
let modalImage = document.getElementById('img01');
let modalTitle = document.getElementById('modal-title');

headerCamera.addEventListener('click', function () {
  headerCamera.innerHTML = '&#128248;Truestory';
});

for (let i=0; i< cardImages.length; i++) {
    cardImages[i].addEventListener('click', function () {
      modalImage.src = cardImages[i].src;
      modalTitle.textContent = cardCaption[i].textContent;
      modalW.style.display = "flex";
    })
}

closeModalBtn[0].addEventListener('click', function () {
    modalW.style.display = "none";
  })

  document.addEventListener('keydown', function (e) {
    if (e.key == 'Escape') {modalW.style.display = "none";}
  })

  // DRAG N DROP 
  for (let card of cards) {
    card.addEventListener('dragstart', dragstart);
    card.addEventListener('dragend', dragend);
  }
 
function dragstart(event) {
  event.dataTransfer.setData('id', event.target.id);
  event.target.classList.add('hold');
  setTimeout(() => event.target.classList.add('hide'), 0 );
}

function dragend(event) {
  event.target.classList.remove('hold', 'hide');
}

for (let place of places) {
  place.addEventListener('dragover', dragover);
  place.addEventListener('dragenter', dragenter);
  place.addEventListener('dragleave', dragleave);
  place.addEventListener('drop', dragdrop);
}

function dragover(event) {
event.preventDefault();
  event.dataTransfer.getData('id');
}

function dragenter(event) {
  event.target.classList.add('hovered');

}

function dragleave(event) {
  event.target.classList.remove('hovered');
}

function dragdrop(event) {
  let cardId = event.dataTransfer.getData('id');
  event.target.classList.remove('hovered');
  event.target.append(document.getElementById(cardId));
}