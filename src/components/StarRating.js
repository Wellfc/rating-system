import { useState } from 'react';
import Star from './Star';

function StarRating() {
    const [rating, setRating] = useState('');
    const [activeIndex, setActiveIndex] = useState(-1);

    const ratingDescription = ['Terrible', 'Bad', 'Regular', 'Good', 'Excellent'];

    function updateRating(value, index) {
        setRating(value);
        setActiveIndex(index);
    }

    return (
        <div className="star-rating">
            <span>
                {ratingDescription.map((desc, index) => (
                    <Star
                        key={index}
                        filled={activeIndex > index || rating > index}
                        onClick={() => updateRating(desc, index + 1)}
                    />
                ))}
            </span>
            <h2>{rating}</h2>    
        </div>
    )
}

export default StarRating;