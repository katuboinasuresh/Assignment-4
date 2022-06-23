const Postimage = ({ config }) => {
    return (
        <div className="Postimagewraper">
            <img src={"http://localhost:5000/api/v1/posts/" + config.Image} alt="post images"></img>
        </div>
    );
};
export default Postimage;