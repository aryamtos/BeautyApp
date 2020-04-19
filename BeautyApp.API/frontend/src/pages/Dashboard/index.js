import React, { useEffect, useState } from 'react';
import{Link} from 'react-router-dom';
import api from '../../services/api';

import './style.css';

export default function Dashboard() {

    const [categories, setCategory] = useState([]);
    useEffect(() => {

        async function loadCategories() {

            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboard', {
                headers: { user_id }
            });
            setCategory(response.data);
        }
        loadCategories();

    }, []);
    return (
        <>
        <ul className ="category-List">
            {categories.map(category =>(
                <li key = {category._id}>
                    <header style={{backgroundImage:`url(${category.foto_url})`}}/>
                    <strong>{category.tipos}</strong>
                    <span>{category.price ?`R$${category.price}`: 'GRATUITO' }</span>
                </li>
            ))}
        </ul>

        <Link to ="/new">
           <button className= "btn">Cadastar novo serviço</button> 
        </Link>

        </>
    )
}