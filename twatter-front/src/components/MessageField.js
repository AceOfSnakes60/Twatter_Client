import { useState } from "react";
import { postTwatt } from "../helpers/apiHandler";

function MessageField(props) {
  const [postText, setPostText] = useState('')

  const handleTextChange = (event) => {
    setPostText(event.target.value);
  }
  const handleShareButtonClick = () => {
    if(props.isGroup){
      //Different endpoint for group twatt
    }
    const data = {
      body: postText,
      parentId: props.parentId? props.parentId : null
    }
    console.log(data.text);
    postTwatt(data).then(res=>{console.log(res)}).catch(err => console.error(err));
    window.location.reload();
  }

  return (
    <div>
      <div className="card gedf-card">
        <div className="card-body">
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
              <div className="form-group">
                <label className="sr-only" htmlFor="message">post</label>
                <textarea className="form-control" id="message" rows="3" placeholder="What are you thinking?" onChange={handleTextChange}></textarea>
              </div>
            </div>
            <div className="tab-pane fade" id="images" role="tabpanel" aria-labelledby="images-tab">
              <div className="form-group">
                <div className="custom-file">
                  <input type="file" className="custom-file-input" id="customFile" />
                  <label className="custom-file-label" htmlFor="customFile">Upload image</label>
                </div>
              </div>
              <div className="py-4"></div>
            </div>
          </div>
          <div className="btn-toolbar justify-content-between">
            <div className="btn-group">
              <button type="submit" className="btn btn-primary" onClick={handleShareButtonClick}>share</button>
            </div>
            <div className="btn-group">
              <button id="btnGroupDrop1" type="button" className="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-globe"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="btnGroupDrop1">
                <a className="dropdown-item" href={'*'}><i className="fa fa-globe"></i> Public</a>
                <a className="dropdown-item" href={'*'}><i className="fa fa-users"></i> Friends</a>
                <a className="dropdown-item" href={'*'}><i className="fa fa-user"></i> Just me</a>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default MessageField;