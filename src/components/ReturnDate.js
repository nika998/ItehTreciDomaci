import React, { Component } from "react";

class ReturnDate extends Component {
    countReturnDate() {

        var date = new Date();
        var returnDate = new Date(date);
        returnDate.setDate(date.getDate() + 30);
        return returnDate.toDateString();
    }
    render() {

        return (
            <p>
                Your return date is due to: {this.countReturnDate()}
            </p>
        );
    }
}

export default ReturnDate;