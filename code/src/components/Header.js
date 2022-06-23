import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="head">
            <div className="text">
                <img className="circle" src="https://i.pinimg.com/564x/ba/3f/f2/ba3ff2209d0c43655116b31f8e2bbd65--circle-symbol-free-icon.jpg" height={20} width={20} alt="icon"></img>
                <b>Instaclone</b>
            </div>
            <div className='cam'>

                <Link to="/Createpost">
                    <img src="https://thumbs.dreamstime.com/b/camera-icon-isolated-white-background-symbol-vector-185770595.jpg" height={50} width={50} alt="camera" />
                </Link>
            </div>
        </div>
    );
}

export default Header;