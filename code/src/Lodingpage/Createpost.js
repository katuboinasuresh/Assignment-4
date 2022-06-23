import "./Create.css"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Form = () => {
    const [user, setUser] = useState({
        author: '',
        location: '',
        description: ''
    });
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        const Image = e.target.elements.userFile.files[0];
        formData.append('Image', Image);
        formData.append('author', user.author);
        formData.append('location', user.location);
        formData.append('description', user.description);
        // formData.append('date', "new Date()");
        try {
            const response = await axios.post(
                'http://localhost:5000/api/v1/post',
                formData
            );
            navigate('/Lodingpage');
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div className='postdetails'>
                <div className='form'>
                    <form id="#main-div" onSubmit={handleSubmit}>
                        <div className='file'>
                            <input type="file" placeholder="No file chosen" name="userFile"
                                required />
                        </div>
                        <div className='id1'>
                            <input type="text" className="name" placeholder="Author" value={user.author}
                                onChange={(e) => setUser({ ...user, author: e.target.value })}
                                required />
                            <input type="text" className="location" placeholder="Location" value={user.location}
                                onChange={(e) => setUser({ ...user, location: e.target.value })}
                                required />
                        </div>
                        <div className='desc'>
                            <input type="text" className="description" placeholder="Description" value={user.description}
                                onChange={(e) => setUser({ ...user, description: e.target.value })}
                            />
                        </div>
                        <div className='post'>
                            <button id="btn_to_create" type='submit'>Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Form;