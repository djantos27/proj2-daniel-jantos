// Collection Page -    should present all items in the db in a list, with the ID and Title
//                      each item should also have a "more" link, that once clicked will bring
//                      them to a page with all the data from that item, and a button to go "back"

import Link from "next/link";

export default async function List()
{
    const data = await fetch("http://localhost:4000/books");
    const books = await data.json();

    return (
        <div>
            <h1>List for Books</h1>
                    {
                        books.map( (book) => (
                            <ul key ={book.id}>
                                <dt>{book.id}&nbsp;
                                    {book.title}&nbsp;
                                    <Link href={`/collection/${book.id}`}>More</Link></dt>
                            </ul>
                        )   )
                    }
        </div>
    );
}