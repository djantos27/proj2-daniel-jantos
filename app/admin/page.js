//Admin Page -  should have all books, and information presented in a table
//              with ability to click on edit or delete

import styles from "./styles.module.css";
import Link from "next/link";
import { revalidatePath } from "next/cache";

export default async function Books()
{
    const data = await fetch("http://localhost:4000/books");
    const books = await data.json();

    async function deleteBook(deleteID)
    {
        'use server'

        await fetch(`http://localhost:4000/books/${deleteID}`, {
            method: "DELETE"});

        revalidatePath("/admin");
        revalidatePath("/collection");
    };

    return (
        <div>
            <Link href="/collection"><button>Navigate to Collection</button></Link>
            <br />
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
                                <td><img src={book.image} alt="cover" width="100" /></td>
                                <td><Link href={`/admin/edit/${book.id}`}>E</Link></td>
                                <td>
                                    <form action={deleteBook.bind(null, book.id)}>
                                        <input type ="submit" value="D" />
                                    </form>
                                </td>
                            </tr>
                        )   )
                    }
                </tbody>
            </table>
        </div>
    );
}