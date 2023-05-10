import React from "react";
// import NavBar from "../component/NavBar.jsx";

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center ">
                    <div className="col-12 bg-secondary pb-5  ">
                        <h1>A Warm Welcome!</h1>
                        <br/>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio excepturi 
                            culpa alias laboriosam exercitationem accusantium consequuntur possimus 
                            magnam adipisci tenetur aliquid tempore fugiat earum, nihil cumque eligendi 
                            omnis in distinctio repellat voluptatem consequatur vel amet. Id recusandae 
                            non ratione corrupti.
                        </p> <br/>
                        <button type="button" class="btn btn-primary">Call to Action!</button> 
                    </div>
                </div>
                <div className="row justify-content-center mt-3">
                    <div className="col-3 ">
                        <div className="card text-center ">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body ">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Find out more!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card text-center">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Find out more!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card text-center">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Find out more!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card text-center">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Find out more!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default Home;
