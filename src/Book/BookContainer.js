import React, {Component} from 'react';
import ReactPaginate from 'react-paginate';
import BookForm from "./BookForm";
import BookList from "./BookList";
import Search from "../Search";


class BookContainer extends Component {

    constructor() {
        super();

        this.state = {
            allBooks: [],
            search: ''
        }
    }


    componentDidMount() {
        fetch('http://localhost:3000/books')
            .then(db => db.json())
            .then(bookList =>
                this.setState({allBooks: bookList}
            ));
    }


    handleSearch = (event) => {
        this.setState( {
            search: event.target.value
        })
    }

    addNewBook = (newBook) => {
        this.setState(previousState => {
            return {allBooks: [...previousState.allBooks, newBook]}
        })
    };

    pagination = ({allBooks, BookList, allBooksLimit, pageLimit}) => {
        
    }


    render() {
        return (
            <div className='book-container-div'>
                <Search onChange={this.handleSearch}/>
                <BookForm addNewBook={this.addNewBook}/>
                <BookList allBooks={this.state.allBooks.filter(
                    book => book.title.toLowerCase().includes(this.state.search.toLowerCase())
                )}/>
            </div>
        );
    }
}

export default BookContainer;