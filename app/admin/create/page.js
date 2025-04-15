// Create Page

import styles from "./styles.module.css";
import Link from "next/link";

export default async function Edit({params}) 
{
    const { bookid } = await params; 
    const data = await fetch(`http://localhost:4000/books`);
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
            <h1>Add New Book:</h1>
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