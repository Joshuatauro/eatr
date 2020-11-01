import React from 'react'
import MenuItem from './MenuItem'

import './Menu.css'

const Menu = () => {
  const items = [
    {img: 'images/menu-1.jpg' , alt: 'Salad' , title: 'Salad' , price: '$3'},
    {img: 'images/menu-2.jpg' , alt: 'Pizza' , title: 'Hot&Spicy Pizza' , price: '$15'},
    {img: 'images/menu-3.jpg' , alt: 'Burger' , title: 'Eatr Burger' , price: '$8'},
    {img: 'images/menu-4.jpg' , alt: 'Steak' , title: 'Eatr Steak' , price:'$30'},
    {img: 'images/menu-5.jpg' , alt: 'Pasta' , title: 'Pasta' , price:'$5'},
    {img: 'images/menu-6.jpg' , alt: 'Biryani' , title: 'Biryani' , price: '$10'},
    {img: 'images/menu-7.jpg' , alt: 'Sandwich' , title: 'Sandwich' , price: '$2'},
    {img: 'images/menu8.jpg' , alt:'Kebab Platter' , title: 'Kebab Platter' , price: '$15'}
  ]
  return (
    <div className="menu" id="menu">
      <div className="menu-container">
        <div className="menu-content">
          <h1><span className="red menu">M</span>enu</h1>
          <p>Check out our wide variety of cusines to satisfy your hunger</p>
        </div>
        <div className="menu-card-container">
          {items.map((props) => {
            return(
              <MenuItem props = {props} />
            )
          })}
        </div>
        <div className="menu-finishing">
          <button><i className="fas fa-search-location" />Visit Us!</button>
        </div>
      </div>
    </div>
  )
}

export default Menu
