'use strict';

const form = document.getElementById( 'flowerForm' );

const div = document.getElementById( 'tableDiv' );

const table = document.createElement( 'table' );

div.appendChild( table );

let all = [];

function Flower( name, img, season ) {
  this.name = name;
  this.imgs = `${img}`;
  this.season = season;
  all.push( this );
}




Flower.prototype.render = function () {

  let trElement = document.createElement( 'tr' );
  table.appendChild( trElement );

  let tdElement = document.createElement( 'td' );
  trElement.appendChild( tdElement );

  let imgElement = document.createElement( 'img' );

  tdElement.appendChild( imgElement );

  imgElement.src = this.imgs;


  tdElement = document.createElement( 'td' );
  trElement.appendChild( tdElement );
  tdElement.textContent = this.name;

  tdElement = document.createElement( 'td' );
  trElement.appendChild( tdElement );
  tdElement.textContent = this.season;

};

function saveData() {
  localStorage.setItem( 'flower',JSON.stringify( all ) );
}



form.addEventListener( 'submit', saveSubmit );

function saveSubmit( event ) {
  event.preventDefault();

  let name = event.target.name.value;
  let cate = event.target.category.value;
  let img = `./img/${cate}.jpeg`;
  let season = event.target.season.value;
  let newFlower = new Flower( name, img, season );
  newFlower.render();
  saveData();
  form.reset();
}


function getdata() {
  let data = JSON.parse( localStorage.getItem( 'flower' ) );
  console.log( data );
  if ( data ) {
    for ( let i = 0; i < data.length; i++ ) {

      let sameFlower = new Flower( data[i].name, data[i].imgs, data[i].season );
      sameFlower.render();

    }
    console.log( data[0].imgs );
  }
}

getdata();

