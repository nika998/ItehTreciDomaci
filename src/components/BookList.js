import React, { Component } from "react";
import ChosenBook from "./ChosenBook";
import Book from "./Book";

class BookList extends Component {
    state = {
        showChosen: false,
        chosenBook: {}
    };
    handler(someArg){
        const doesShow = this.state.showChosen;
        this.setState({
            showChosen: true,
            chosenBook: someArg
        });
    }
    render() {
        const books = this.props.books;
        var handler  =   this.handler;
        return (
            <div>
                { this.state.showChosen == false ?
                    <table>
                        <thead>
                            <tr>
                                <th style={{ width: "50px", textAlign: "center" }}>#</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Pages</th>
                                <th style={{ width: "148px" }}>Borrow</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map(book => {
                                return (
                                    <Book
                                        key={book.id}
                                        book={book}
                                        handler={handler.bind(this)}
                                    />
                                );
                            })
                            }
                        </tbody>
                    </table> : <div>
                        <ChosenBook book={this.state.chosenBook}/>
                    </div>
                }
            </div>
        );
    }
}

export default BookList;