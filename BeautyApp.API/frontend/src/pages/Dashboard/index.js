import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import socketio from 'socket.io-client';

import './style.css';

export default function Dashboard() {

    const [categories, setCategory] = useState([]);
    const [requests, setRequests] = useState([]);

    const user_id = localStorage.getItem('user');
    
    const socket = useMemo(() => socketio('http://localhost:3000', {
        query: { user_id },
    }), [user_id]);

    useEffect(() => {

        socket.on('booking_request', data => {
            setRequests([...requests, data]);
        })
    }, [requests, socket]);
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

    async function handleAccept(id) {

        await api.post(`/bookings/${id}/approvals`);
        setRequests(requests.filter(request => request._id !== id));
    }

    async function handleReject(id) {

        await api.post(`/bookings/${id}/rejections`);
        setRequests(requests.filter(request => request._id !== id));
    }
    return (
        <>
            <ul className="notifications">
                {requests.map(request => (
                    <li key={request._id}>
                        <p>
                            <strong>{request.User.email}</strong>está solicitando uma reserva em <strong>{request.category.tipos}</strong>para a data<strong>{request.date}</strong>
                        </p>
                        <button className="accept" onclick={() => handleAccept(request._id)}>ACEITAR</button>
                        <button className="reject" onclick={() => handleReject(request._id)}>REJEITAR</button>
                    </li>
                ))}
            </ul>
            <ul className="category-List">
                {categories.map(category => (
                    <li key={category._id}>
                        <header style={{ backgroundImage: `url(${category.foto_url})` }} />
                        <strong>{category.tipos}</strong>
                        <span>{category.price ? `R$${category.price}` : 'GRATUITO'}</span>
                    </li>
                ))}
            </ul>

            <Link to="/new">
                <button className="btn">Cadastar novo serviço</button>
            </Link>

        </>
    )
}