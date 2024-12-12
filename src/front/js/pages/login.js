import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Login = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const token = sessionStorage.getItem("token");
    console.log("This is your token", token);

    const handleClick = () => {
        event.preventDefault();
        const opts = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        };
        fetch('https://super-duper-system-jwr6pxqxx7pcj7p5-3001.app.github.dev/api/login', opts)
            .then(resp => {
                if (resp.status === 200) return resp.json();
                else alert("There has been some error");
            })
            .then(data => {
                console.log("this came from the backend", data);
                sessionStorage.setItem("token", data.access_token);
            })
            .catch(error => {
                console.error("There was an error", error);
            });
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="col-6">
                <main className="form-signin w-100 m-auto mt-5" >
                    <h1 className="h3 mb-3 fw-normal">Login</h1>

                    {(token && token!="" && token!=undefined) ? "You are logged in with this token " + token : (
                        <form>
                            <div className="form-floating mt-2">
                                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mt-2">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>

                            <button className="btn btn-primary w-100 py-2 mt-2" type="submit"
                                onClick={handleClick}
                            >Login</button>
                        </form>
                    )}
                </main >
            </div>
        </div>
    )
}

