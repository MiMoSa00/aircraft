import React from 'react'


// Imported images

import paris from '../../Assets/paris.jpeg'
import newyork from '../../Assets/newyork.jpg'
import london from '../../Assets/london.jpg'
import dubai from '../../Assets/dubai.jpg'

// imported images of users
import traveler1 from '../../Assets/users2.jpeg'
import traveler2 from '../../Assets/users3.jpeg'
import traveler3 from '../../Assets/users5.jpeg'
import traveler4 from '../../Assets/users6.jpeg'


// map

const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: 'Louise',
    socialLink: '@louy'
  },

  {
    id: 2,
    destinationImage: newyork,
    travelerImage: traveler2,
    travelerName: 'Greyson Lisa',
    socialLink: '@mel'
  },

  {
    id: 3,
    destinationImage: london,
    travelerImage: traveler3,
    travelerName: 'Christian Nortan',
    socialLink: '@Chris'
  },

  {
    id: 4,
    destinationImage: dubai,
    travelerImage: traveler4,
    travelerName: 'Rissa Quan',
    socialLink: '@RSGQ'
  }
]

const Travelers = () => {
  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2>
          Top travelers of this month!
        </h2>


        <div className="travelersContainer grid">

       
       {
        travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink})=> {
          return(

              //  {/* Single passenger card */}
            <div key={id} className="singleTraveler">


            <img src={destinationImage} className='destinationImage' />


            <div className="travelersDetails">
              <div className="travlerPicture">
                <img src={travelerImage} className='travelerImage' />
              </div>
              <div className="travelerName">
                <span>{travelerName}</span>
                <p>{socialLink}</p>
              </div>
            </div>


          </div>
          )
        })
       }

        </div>
      </div>
    </div>
  )
}

export default Travelers