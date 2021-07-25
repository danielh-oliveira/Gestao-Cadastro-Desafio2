import watch from '../../assets/img/relogio.png';
import iphone from '../../assets/img/iphone.png';
import ipad from '../../assets/img/ipad.png';
import pencil from '../../assets/img/pencil.png';

import { useState, useEffect } from 'react';

export default function Prod() {

    const [prods, setProds] = useState([]);

    useEffect( ()=> {
        setProds(JSON.parse(localStorage.getItem('produtos'))) 
    }, [])

    function Imagem(tipo) {
        if(tipo == 1) {
            return <img src={watch} alt='Foto Produto' />
        } else if (tipo == 2) {
            return <img src={iphone} alt='Foto Produto' />
        }   else if (tipo == 3) {
            return <img src={ipad} alt='Foto Produto' />
        }   else if (tipo == 4) {
            return <img src={pencil} alt='Foto Produto' />
        }   else  {
            return <img src={watch} alt='Foto Produto' />
        }
    }


    return(
        <section className='produtos'>
            {prods !== null ? ( prods.map( prod => (
                <div key={prod.IDe}>
                    <div>
                       {Imagem(prod.tipo)}
                    </div>
                    <h3>{prod.titulo}</h3>
                    <p>{prod.desc}</p>
                    <button>Adicionar ao Carrinho</button>
                </div>
                
            ))) : (<p>Nenhum produto encontrado.<br /> Adicione um produto na aba ADMINISTRAÇÃO</p>) }
        </section>
    );
}

