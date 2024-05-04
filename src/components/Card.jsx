import { useState } from "react";
import './Card.css'
function Card({id, image, info, price, name,removeTour}) {
    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0, 200)}...`

    function readmoreHandler() {
        setReadmore(!readmore);
    }

    
    return (
        <div className="card">
        
            <img src={image} alt={name} className="image"></img>

            <div className="tour-info">
                <div className="tour-detail">
                    <h4 className="price">{price}</h4>
                    <h4 className="name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show Less` : `Read More`}
                    </span>
                </div>
            </div>

            <button className="btn-red" onClick={()=> removeTour(id)}>
                Not Interested
            </button>
        </div>
    );
}

export default Card;
