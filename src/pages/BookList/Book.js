import React from 'react';

const Book = ({book}) => {
    // console.log(book);
    return (
        <div className='bg-blue-100 m-4 rounded-lg p-7 shadow-md' data-aos="fade-up">
            <h3 className='text-2xl mb-3 text-lime-700  font-bold'>{book?.semester}</h3>
            <p className='text-fuchsia-600 text-lg font-semibold'> {book?.book.book1}</p>
            <p className='text-red-600 text-lg font-semibold'> {book?.book.book2}</p>
            <p className='text-yellow-600 text-lg font-semibold'> {book?.book.book3}</p>
            <p className='text-green-600 text-lg font-semibold'> {book?.book.book4}</p>
            <p className='text-teal-500 text-lg font-semibold'> {book?.book.book5}</p>
            <p className='text-orange-500 text-lg font-semibold'> {book?.book.book6}</p>
            <p className='text-indigo-500 text-lg font-semibold'>{book?.book.book7}</p>
        </div>
    );
};

export default Book;