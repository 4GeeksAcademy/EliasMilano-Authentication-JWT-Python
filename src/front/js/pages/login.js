import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="col-6">
                <main className="form-signin w-100 m-auto mt-5" >
                    <form>
                        <h1 className="h3 mb-3 fw-normal">Login</h1>

                        <div className="form-floating mt-2">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mt-2">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>

                        <button className="btn btn-primary w-100 py-2 mt-2" type="submit">Login</button>
                    </form>
                </main >
            </div>
        </div>
    )
}

