const PostFooter = ({ config }) => {
    return (
        <div className="Postfooter">
            <div className="postondatecontainer">
                <div className="likecontainers">
                    <div className="likebuttons">
                        <div className="like">
                            <img src="https://e7.pngegg.com/pngimages/615/837/png-clipart-heart-symbol-love-symbol-love-text.png" height={25} width={25} alt="likes"></img>
                        </div>
                        <div className="share">
                            <img src="https://t3.ftcdn.net/jpg/04/71/68/22/360_F_471682296_Euq45EOSe7zZkIi32VGNEaHrsP5HIhgD.jpg" height={25} width={25} alt="share"></img>
                        </div>
                    </div>
                    <div className="likescount">
                        60 likes
                        <span className="postedon">{Date(config.createdAt)}</span>
                    </div>
                </div>
            </div>
            <div className="description">{config.description}</div>
        </div>
    );
};
export default PostFooter;
