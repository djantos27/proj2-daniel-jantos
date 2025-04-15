// Single ID page to display all params from one single book

import styles from "./styles.module.css";
import Link from "next/link";

export default async function Singlebook({params}) 
{
    const data = await fetch(`http://localhost:4000/books/${params.bookid}`);
    if (!data.ok) 
        {
        return <h1>Book not found</h1>;
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
                    <tr><Link href={`/collection`}>Back</Link></tr>
                </thead>
            </table>
        </div>
    )
}