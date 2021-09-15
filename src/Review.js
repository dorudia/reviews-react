import React, {useState} from 'react';
import people from './data'
import {FaChevronLeft,FaChevronRight, FaQuoteRight} from "react-icons/fa"
const Review = () => {
    const [index, setIndex] = useState(0)
    const{name, job, image, text} = people[index];

    const checkNumber = (number) => {
        if(number > people.length -1) {
            return 0
        }
        if(number < 0) {
            return people.length - 1;
        }
        return number
    }

    const prevPerson = () => {
        setIndex(() => {
            let newIndex = index - 1;
            return checkNumber(newIndex)
        })
    }
    const nextPerson = () => {
        setIndex(() => {
            let newIndex = index + 1;
            return checkNumber(newIndex)
        })
    }

    const randomPerson = () => {
        setIndex(() => {
            let randomNumber = Math.floor(Math.random() * people.length)
            console.log(randomNumber)
            if(randomNumber === index) {
                return checkNumber(randomNumber + 1);
            }
            return randomNumber;
        })
    }

    return (
        <div className='container'>
            <img src={image} alt=""/>
            <span><FaQuoteRight/></span>
           <h2>{name}</h2>
            <h3>{job}</h3>
            <p>{text}</p>
            <div className="btn-container">
                <button className='prev-btn' onClick={prevPerson}><FaChevronLeft/></button>
                <button className='next-btn' onClick={nextPerson}><FaChevronRight/></button>
            </div>
             <button className='random-btn' onClick={randomPerson}>Suprise Me</button>
        </div>
    );
};

export default Review;
