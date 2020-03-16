import React, {Component} from 'react';

class BookCard extends Component {
    render() {

        const {title, author, description, price} = this.props.book;

        return (
            <div className='card'>
                <div className='card-body'>
                    <h3 className='card-title'>{title}</h3>
                    <h5 className='card-subtitle mb-2 text-muted'>{author}</h5>
                    <p className='card-text'>{description}</p>
                    <h6>{price}</h6>
                </div>


            </div>
        );
    }
}

export default BookCard;

//