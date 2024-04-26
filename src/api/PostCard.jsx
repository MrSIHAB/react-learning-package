import React from "react";

const PostCard = (prof)=>{
    return (
        <div className="cardContainer">
            <h3 className="cardTitle">{prof.data.name.first}</h3>
            {prof.data.picture.large?<img src={prof.data.picture.large} alt="Thumbnail" className="cardThumb" />: <></>}
            <div style={{alignContent: "center"}}><span className="author">{prof.data.name.first}</span></div>
        </div>
    )
}

export default PostCard