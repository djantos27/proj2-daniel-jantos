// Create Page

import styles from "./styles.module.css";
import Link from "next/link";

export default async function Edit({params}) 
{
    const { bookid } = await params; 
    const data = await fetch(`http://localhost:4000/books/${bookid}`);
    //console.log(params)
    if (!data.ok) 
        {
        return (
            <div>
                <h1>Book not found</h1>
                <h2><Link href={`/admin`}>Back</Link></h2>
            </div>
            )
        }
    const book = await data.json();
    //console.log("this is book data", book)

    return (
        <div>
            <h1>Current Data:</h1>
            <table className={styles.books_table}>
                <thead>
                    <tr>
                        <th>{book.id}</th>
                        <th>{book.title}</th>
                        <th>{book.author}</th>
                        <th>{book.year}</th>
                        <th>{book.image}</th>
                    </tr>
                </thead>
            </table>
            <h2><Link href={`/admin`}>Back</Link></h2>
        </div>
    )
}