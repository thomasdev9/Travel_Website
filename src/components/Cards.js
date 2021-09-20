import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out this EPIC Destinations</h1>
            <div className='cards-container'>
                <div className='cards-wrapper'>
                    <ul className='cards__items'>
                        <CardItem src='images/img-9.jpg'
                            text='Explore the hidden waterfall deep indise Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem src='images/img-2.jpg'
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem src='images/img-3.jpg'
                            text='Explore the hidden waterfall deep indise Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem src='images/img-7.jpg'
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                        />
                        <CardItem src='images/img-5.jpg'
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
