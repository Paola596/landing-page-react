import React from "react";
// import NavBar from "../component/NavBar.jsx";

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8 bg-secondary">
                        <h1>A Warm Welcome!</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Distinctio nisi consequatur dolores repellendus, similique
                            ipsa dolorum qui quod repellat rem.
                        </p>
                        <button type="button" class="btn btn-primary">Call to Action!</button>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-8">
                        <div className="card">
                            <img src="..." class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default Home;
