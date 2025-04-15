import styles from "./styles.module.css";

export default async function Books()
{
    const data = await fetch("http://localhost:4000/books");
    const books = await data.json();

    return (
        <div>
            <h1>Table for Books</h1>
            <table className={styles.books_table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map( (book) => (
                            <tr key ={book.id}>
                                <td>{book.id}</td>
                                <td>{book.title}</td>
                            </tr>
                        )   )
                    }
                </tbody>
            </table>
        </div>
    );
}