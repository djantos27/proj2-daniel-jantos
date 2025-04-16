// Edit page

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
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Year</th>
                        <th>Cover</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.year}</td>
                        <td><img src={book.image} alt="cover" width="100" /></td>
                    </tr>
                </tbody>
            </table>
            <br>
            </br>
            <br />
            <h1>Change To:</h1>
            <form>
                <label htmlFor="bookid">Book ID: </label>&nbsp;
                <input type="text" name="bookid" id="bookid" />
                <br />
                <label htmlFor="title">Title: </label>&nbsp;
                <input type="text" name="title" id="title" />
                <br />
                <label htmlFor="author">Author: </label>&nbsp;
                <input type="text" name="author" id="author" />
                <br />
                <label htmlFor="year">Year Published: </label>&nbsp;
                <input type="integer" name="year" id="year" />
                <br />
                <label htmlFor="image">Link to Cover jpeg: </label>&nbsp;
                <input type="jpeg" name="image" id="image" />
                <br />
                <input type="submit" />
            </form>
            <h2><Link href={`/admin`}>Back</Link></h2>
        </div>
    )
}