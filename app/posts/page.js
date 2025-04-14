import styles from "./styles.modules.css";

export default async function Posts()
{
    const data = fetch("http://localhost:4000/posts");
    const posts = await data.json();

    return (
        <div>
            <h1>Table for Posts</h1>
            <table className={styles.posts_table}>
                <thread>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                    </tr>
                </thread>
                <tbody>
                    {
                        posts.map( (post) => (
                            <tr>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                            </tr>
                        )   )
                    }
                </tbody>
            </table>
        </div>
    )
}