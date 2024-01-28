import {useState} from "react";
import solidHeart from '../img/heart-solid.svg'
import regularHeart from '../img/heart-regular.svg'

function Card () {
    const [liked, setLiked] = useState(false);

    return (
        <div className="card">
            <img src="http://via.placeholder.com/300x300" className="card-img-top" alt="photo"/>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">Photo title</h5>
                    {liked ? (
                        <img onClick={() => setLiked(false)} width="30px" src={solidHeart}/>
                    ) : (
                        <img onClick={() => setLiked(true)} width="30px" src={regularHeart}/>
                    )}
                </div>
                <p className="card-text">Photo description. Lorem ipsum dolor.</p>
                <button className="btn btn-primary" data-toggle="modal" data-target="#myModal">Open Full</button>

                <div className="modal fade" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Photo title</h5>
                                <button type="button" className="close border-0 bg-white" data-dismiss="modal">
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <img src="http://via.placeholder.com/300x300" alt="photo"/>
                                <p>Photo description. Lorem ipsum dolor.</p>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-primary" data-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;