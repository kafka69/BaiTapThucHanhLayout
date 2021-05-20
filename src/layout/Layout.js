import React, { Component } from 'react'

export default class Layout extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <div className='container'>
                        <a className="navbar-brand" href="#">Start Bootstrap</a>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Service</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
                <div className='container'>
                    <div class="jumbotron text-left my-4">
                        <div>
                            <h1 classname="display-4">A Warm Welcome!</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
                            <p classname="lead">
                                <button className='btn btn-primary btn-lg'>Learn more</button>
                            </p>
                        </div>
                    </div>
                    <div className='row text-center'>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="card h-100">
                                <img className="card-img-top" src="https://via.placeholder.com/500x325" alt="..." />
                                <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                                </div>
                                <div className="card-footer"><a className="btn btn-primary" href="#!">Find Out More!</a></div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="card h-100">
                                <img className="card-img-top" src="https://via.placeholder.com/500x325" alt="..." />
                                <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                                </div>
                                <div className="card-footer"><a className="btn btn-primary" href="#!">Find Out More!</a></div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="card h-100">
                                <img className="card-img-top" src="https://via.placeholder.com/500x325" alt="..." />
                                <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                                </div>
                                <div className="card-footer"><a className="btn btn-primary" href="#!">Find Out More!</a></div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="card h-100">
                                <img className="card-img-top" src="https://via.placeholder.com/500x325" alt="..." />
                                <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                                </div>
                                <div className="card-footer"><a className="btn btn-primary" href="#!">Find Out More!</a></div>
                            </div>
                        </div>


                    </div>
                </div>
                <footer className='py-5 bg-dark'>
                    <div className='container'>
                        <p className='m-0 text-center text-white'>Copyright © Your Website 2021</p>
                    </div>
                </footer>
            </div>
        )
    }
}
