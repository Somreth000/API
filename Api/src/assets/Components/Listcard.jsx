import React, { useEffect, useState } from 'react';
import Card from './Card';
import './Cart.css';

const Listcard = () => {
    const [books, setBooks] = useState([]);

    const getApi = async () => {
        try {
            const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=flowers');
            const data = await response.json();
            setBooks(data.items);
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getApi();
    }, []);

    return (
        <div>
            <div className="grid">
                {
                    books.length === 0 ? <h1>Loding...</h1> // books.length === 0 ? <h1>Loding...</h1> ដាក់អោយ loding មុនចេញ
                    :books.map((result, index) => (
                        <Card
                            key={index}
                            title={result.volumeInfo.title}
                            date={result.volumeInfo.publishedDate}
                            des={result.volumeInfo.description}
                            img={result.volumeInfo.imageLinks?.thumbnail}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Listcard;
