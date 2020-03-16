import React, {Component} from 'react';
import BookCard from "./BookCard";

class BookList extends Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.allBooks.map(
                        book =>
                        <BookCard key={book.id} book={book}/>
                    )}
                </div>
            </div>
        );
    }
}

export default BookList;

