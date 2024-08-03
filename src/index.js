import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

function Gallery(props){ //props={img:{item.imgurl}}
  return(
        <div className='content'>
              <img src={props.img} alt="" />
              <h3>{props.name}</h3>
        </div>
  )
}

//array of objects
var cars=[
  {
    imgurl:"https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"White Bmw E46"
  },
  {
    imgurl:"https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Black Dodge Challenger Coupe"
  },
  {
    imgurl:"https://images.pexels.com/photos/20499336/pexels-photo-20499336/free-photo-of-side-of-gray-lamborghini-sports-car.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Lamborghini Sports Car"
  },
  {
    imgurl:"https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"  Gray Sports Car"
  },
  {
    imgurl:"https://images.pexels.com/photos/951319/pexels-photo-951319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Black Chrysler 300c"
  },
  {
    imgurl:"https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Gray Mercedez Benz Amg"
  },
  {
    imgurl:"https://images.pexels.com/photos/1077785/pexels-photo-1077785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Black and Blue Rockerz"
  },
  {
    imgurl:"https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Silver Mercedes-benz"
  },
  {
    imgurl:"https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Red Jeep Wrangler Suv "
  },
  {
    imgurl:"https://images.pexels.com/photos/452099/pexels-photo-452099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Silver Bmw"
  },
  {
    imgurl:"https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Audi Blacky"
  },
  {
    imgurl:"https://images.pexels.com/photos/1054211/pexels-photo-1054211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Blue Audi RS 6"
  },

]
root.render(
    <>
    <h1 className='heading'>Image Gallery</h1>
    <div className='main-container'>
    {
      cars.map(function(item){
        return <Gallery img={item.imgurl} name={item.name}></Gallery>
      })
    }
    </div>
    </>
);

