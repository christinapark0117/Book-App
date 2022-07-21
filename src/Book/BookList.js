import React, {Component} from 'react';
import BookCard from "./BookCard";


class BookList extends Component {

    render() {
        return (
            <div className='book-list-container'>
                <ul className='book-list'>
                    {this.props.allBooks.map(
                        book =>
                            <li>
                                <BookCard key={book.id} book={book}/>
                            </li>
                    )}
                </ul>

                {/*<button className='previousbutton' id='button'>Previous</button>*/}
                {/*<button className='nextbutton' id='button' >Next</button>*/}

            </div>
        );
    }
}

export default BookList;

