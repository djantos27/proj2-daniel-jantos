// Single ID page to display all params from one single book

import styles from "./styles.module.css";
import Link from "next/link";

export default async function Singlebook({params}) 
{
    const { bookid } = await params; 
    const data = await fetch(`http://localhost:4000/books/${bookid}`);
    //console.log(params)
    if (!data.ok) 
        {
        return (
            <div>
                <h1>Book not found</h1>
                <h2><Link href={`/collection`}>Back</Link></h2>
            </div>
            )
        }
    const book = await data.json();
    //console.log("this is book data", book)

    return (
        <div>
            <h1>{book.title}</h1>
            <table className={styles.books_table}>
                <thead>
                    <tr>
                        <th>{book.id}</th>
                        <th>{book.title}</th>
                        <th>{book.author}</th>
                        <th>{book.year}</th>
                        <th><img src={book.image} alt="cover" width="50" /></th>
                    </tr>
                </thead>
            </table>
            <br>
            </br>
            <h2><Link href={`/collection`}>Back</Link></h2>
        </div>
    )
}

// Generate static params

export async function generateStaticParams()
{
    //const { bookid } = await params;
    const data = await fetch("http://localhost:4000/books");
    const books = await data.json();

    //console.log(books.slice(0,10));

    const slicebook = books.slice(0,10);

    return slicebook.map( (book) => ({
        bookid: book.id
    } ));
}