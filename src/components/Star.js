import { FaStar } from 'react-icons/fa';

function Star(props) {
    return (
        <FaStar
            color={props.filled ? 'gold' : 'gray'}
            onClick={props.onClick}  
        />
    );
}

export default Star;