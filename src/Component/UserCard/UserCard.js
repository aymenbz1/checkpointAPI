import React from 'react'
import './UserCard.css'

const UserCard = ({user}) => {
    return (
        
        <div class="center">
  <div class="property-card">
    <a href="#">
      <div class="property-image">
        <div class="property-image-title">
         
        </div>
      </div></a>
    <div class="property-description">
      <h5> Card Title </h5>
      <h3>{user.name}</h3>
      <h3>{user.email}</h3>
      
    </div>
</div>
</div>
    )
}

export default UserCard;
