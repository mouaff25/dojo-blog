import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        setIsPending(true);
        const blog = { title, body, author };
        const abortCont = new AbortController();
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        }, abortCont.signal).then(() => {
            console.log('new blog added');
            setIsPending(false);
            history.push('/');
            history.go(0);
        }).catch((err) => {
            if (err.name === 'AbortError') {
                console.log('fetch aborted');
            }
            else {
                console.log(err.message);
                setIsPending(false);
            }
        });
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={submitHandler}>
                <label>Blog title:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <label>Blog body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Blog author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Adding Blog...</button> }
            </form>
        </div>
    );
}
 
export default Create;