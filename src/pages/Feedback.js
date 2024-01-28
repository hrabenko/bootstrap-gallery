import React from 'react';

function Feedback() {
    return (
        <div className="d-flex flex-column justify-content-center" style={{marginTop: 100 + 'px'}}>
            <h1 className="mb-3" style={{textAlign: "center"}}>Leave feedback</h1>
            <form className="m-auto" style={{width: 500+'px'}}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="feedbackFormControlTextarea1" className="form-label">Your feedback</label>
                    <textarea className="form-control" id="feedbackFormControlTextarea1" rows="10"></textarea>
                </div>
            </form>
        </div>
    );
}

export default Feedback;