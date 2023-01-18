import React, { useEffect, useState } from 'react';
import Book from './Book';

const BookList = () => {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('bookList.json')
            .then(res => res.json())
            .then(books =>setBooks (books))
    }, []) 
    return (
        <div >
            <h2 className='text-center text-4xl my-10 font-bold text-indigo-900'>Semester Book List</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ' >
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
           </div>
        </div>
    );
};

export default BookList;