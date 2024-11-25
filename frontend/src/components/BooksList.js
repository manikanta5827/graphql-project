import React from 'react';
import { useQuery, gql } from '@apollo/client';
import '../App.css'
// GraphQL query to fetch all books
const FETCH_ALL_BOOKS = gql`
  query {
    fetchAllBooks {
      title
      author
      genre
      publishedYear
    }
  }
`;

const BooksList = () => {
  const { loading, error, data } = useQuery(FETCH_ALL_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Books List</h1>
      <ul>
        {data.fetchAllBooks.map((book, index) => (
          <li key={index}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Published Year: {book.publishedYear}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
