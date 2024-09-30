import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const Write = () => {
    const [title, setTitle] = useState('');
    const [idea, setIdea] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, idea };
    
        fetch('http://localhost:8000/pages/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            navigate('/');
        })
      }

    return ( 
        <div className="write">
            <h2>Add a Page</h2>
                <form onSubmit={handleSubmit}>
                    <label>Page title:</label>
                    <input 
                    type="text" 
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                    <label>Page idea:</label>
                    <input 
                    type="text" 
                    required 
                    value={idea}
                    onChange={(e) => setIdea(e.target.value)}
                    />
                    <label>Page body:</label>
                    <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                    <button>Add Page</button>
                </form>
        </div>
    );
}
 
export default Write;