import { Console } from 'console';
import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import SideCart from '../../sideCart/SideCart';
import './Navbar.css';

function Navbar() {

    const [menuActive, setMenuActive] = useState(false)

    function showMenu() {
        setMenuActive(true)

        if (menuActive === false) {
            setMenuActive(true)
        }
        else {
            setMenuActive(false)
        }

    }

    async function OnSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        // TODO: Implement search query...
    }

    return (

        <nav id='navbar'>

            <section id="logo-section">
                <a href="/home#banner" id="logo"><img src="https://i.imgur.com/ptzY2Mh.png" alt="logo" /> Greeniverse</a>
            </section>

            <section className={`${menuActive === true ? 'active' : ''}`} id='menu'>
                <Link to="/home">Home</Link>
                <a href="/home#features">Benefícios</a>
                <a href="/allproducts">Produtos</a>
                <Link to="/providers">Seja um fornecedor</Link>
                <Link to="/aboutus">Sobre nós</Link>
            </section>

            <section id='icons'>
                <label className="fas fa-bars" id="menu-btn" onClick={showMenu}></label>

                <label htmlFor='checkbox_search' className="fas fa-search" id="search-btn">
                    <input type="checkbox" name="checkbox_search" id="checkbox_search" />
                    <form id='search-form'>
                        <input type="search" id='search-box' placeholder='buscar produtos...' />
                        <label htmlFor="searc-box" className='fas fa-search'></label>
                    </form>
                </label>

                <label className="fas fa-shopping-cart" id="cart-btn">
                    <div>
                    <SideCart />
                    </div>
                </label>

                <label htmlFor='checkbox_login' className="fas fa-user" id="login-btn">

                    <input type="checkbox" name="checkbox_login" id="checkbox_login" />  
                    <form className="login-form">
                        <h2> Fazer Login</h2>
                        <a href="/login" className="btn">Logar</a>
                        <a href="/registeruser" className="btn">Cadastrar</a>
                    </form>
                </label>
            </section>




        </nav>

    )
}

export default Navbar;