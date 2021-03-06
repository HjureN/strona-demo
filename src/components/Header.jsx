import React from 'react';

export default function Header(props) {
    return (
        <header className="row block center">
            <div>
                <a href="#/">
                    <h1>Small Shopping Card</h1>
                </a>
            </div>
            <a href="#/cart">Cart</a>
            <a href="#/signin">SignIn</a>
        </header>
    )
}