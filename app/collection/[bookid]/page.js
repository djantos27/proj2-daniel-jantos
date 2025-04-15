// Single ID page to display all params from one single book

import styles from "./styles.module.css";
import Link from "next/link";

export default async function Singlebook({params}) 
{
    const { bookid } = await params;
    const data = await fetch(`http://localhost:4000/books/${bookid}`);
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
                        <th>{book.image}</th>
                    </tr>
                    <br>
                    </br>
                </thead>
            </table>
            <h2><Link href={`/collection`}>Back</Link></h2>
        </div>
    )
}

// Generate static params

export async function generateStaticParams()
{
    const data = await fetch("http://localhost:4000/books");
    const books = await data.json();

    return books.map( (book) =>{
        bookid: book.id
    } );
}