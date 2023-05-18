import React from 'react'

const Seeker = () => {
    return (
        <div>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Busca tu destino" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                    <span className="glyphicon glyphicon-search"></span>
                </button>
            </form>

        </div>
    )
}

export default Seeker