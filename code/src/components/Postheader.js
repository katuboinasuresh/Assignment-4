const Postheader = ({ config }) => {
    return (
        <div className="Postheader">
            <div className="userdetails">
                <div className="username">{config.author}</div>
                <div className="usercity">{config.location}</div>
            </div>
            <div className="useraction">...</div>

        </div>
    );
};

export default Postheader;