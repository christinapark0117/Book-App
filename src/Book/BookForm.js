import React, {Component} from 'react';

class BookForm extends Component {

    constructor() {
        super();

        this.state = {
            title: '',
            author: '',
            description: '',
            price: '',
            categories: ''
        }

    }

    newBook = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        console.log('handling submit...');
        event.target.reset(); //reset the form

        fetch("http://localhost:3000/books", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                author: this.state.author,
                description: this.state.description,
                price: this.state.price,
                categories: this.state.categories.id
            })
        })
            .then(rsp => rsp.json())
            .then(newBK => {
                this.props.addNewBook(newBK)
            })
    }

    render() {
        return (
            <div className='form-div'>
                <h3 className='header'>Add a New Book!</h3>

                <form className="form-group" onSubmit={this.handleSubmit}>

                    <label htmlFor='booktitle'>
                        Title:
                        <input className="form-control" type='text' placeholder="Title of the Book" name="title" onChange={this.newBook}/>
                    </label> &nbsp;

                    <label htmlFor='bookauthor'>
                        Author:
                        <input className="form-control" type='text' placeholder="Name of the Author" name="author" onChange={this.newBook}/>
                    </label><br/>

                    <label htmlFor='bookdescription'>
                        Description:
                        <textarea id='bookdescripiton' className="form-control" type='text' placeholder="write a description" name="description" onChange={this.newBook}/>
                    </label><br/>

                    <label htmlFor='bookcategory'>
                        Category:
                        <select id='bookcategory' className="form-control" placeholder="write a description" name="select" onChange={this.newBook}>
                            <option value="1">Book</option>
                            <option value="2">Categories</option>
                        </select>
                    </label> &nbsp;

                    <label htmlFor='bookprice'>
                        Price:
                        <input id='bookprice' className="form-control" type='text' placeholder="$0.00" name="price" onChange={this.newBook}/>
                    </label> <br/>

                    <input type='submit' value='Submit' />

                </form>
            </div>
        );
    }
}

export default BookForm;
