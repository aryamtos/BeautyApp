import React,{useState, useMemo} from 'react';
import camera from '../../assets/camera.svg';

import api from '../../services/api'

import './styles.css';


export default function New({history}){

    const [tipos, setTipos] = useState('');
    const[price,setPrice] = useState('');
    const[foto, setFoto] = useState(null);
    const preview = useMemo(() =>{

        return foto ?  URL.createObjectURL(foto): null;
    },[foto])
   async  function handleSubmit(event){

    event.preventDefault();
       const user_id = localStorage.getItem('user')
    const data = new FormData();
    data.append('foto',foto);
    data.append('tipos',tipos);
    data.append('price',price);
    
    
    await api.post('/Category',data,{
        headers:{user_id}
    })
    history.push('/dashboard');
    }
    return(

        <form onSubmit={handleSubmit}>

            <label id="foto" style ={{backgroundImage:`url(${preview})`}}

            className ={foto ? 'has-foto':''}
            >
                <input type="file" onChange={event => setFoto(event.target.files[0])}/>
                <img src={camera} alt= "Select img"/>
            </label>
            <label htmlFor = "tipos">CATEGORIA *<span>(separadas por vírgula)</span></label>
            <input

            id="tipos"
            placeholder = "Sua melhor Categoria"
            value={tipos}
            onChange ={event => setTipos(event.target.value)}
            />
            <label htmlFor = "price">VALOR *<span>(em branco para GRATUITO)</span></label>
            <input

            id="price"
            placeholder = "Valor cobrado"
            value={price}
            onChange ={event => setPrice(event.target.value)}
            />

            <button type= "submit" className="btn">Cadastrar</button>
            
        </form>
    )
}