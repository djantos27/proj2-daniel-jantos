//Admin Page -  should have all books, and information presented in a table
//              with ability to click on edit or delete

import styles from "./styles.module.css";
import Link from "next/link";

export default async function Books()
{
    const data = await fetch("http://localhost:4000/books");
    const books = await data.json();

    return (
        <div>
            <h2><Link href={`/admin/create`}>Create</Link></h2>
            <h1>Table for Books</h1>
            <table className={styles.books_table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Year</th>
                        <th>Cover</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map( (book) => (
                            <tr key ={book.id}>
                                <td>{book.id}</td>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.year}</td>
                                <td><img src={book.image} alt="cover" width="50" /></td>
                                <td><Link href={`/admin/edit/${book.id}`}>E</Link></td>
                                <td>D</td>
                            </tr>
                        )   )
                    }
                </tbody>
            </table>
        </div>
    );
}