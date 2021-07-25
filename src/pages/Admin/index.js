import Header from '../../components/Header/'
import Foooter from '../../components/Footer/'
import { useState } from 'react';

export default function Admin() {

    const [nome, setNome] = useState('');
    const [produto, setProduto] = useState('');
    const [IDe, setIDe] = useState('');
    const [select, setSelect] = useState('');

    const [nomeCliente, setNomeCliente] = useState('');
    const [idadeCliente, setIdadeCliente] = useState('');
     

    function handleAdd(e) {
        if(IDe.length === 0 || nome.length === 0 || produto.length === 0 || select == 0) {
            alert('Um dos campos está vazio!');
        } else {
            e.preventDefault();
            if ( localStorage.getItem('produtos') !== null ){
            const estoque = JSON.parse(localStorage.getItem('produtos'));

            const novoProd = {
                "id": 20,
                "tipo": select,
                "titulo": nome,
                "desc": produto 
            }

            estoque.push(novoProd);
            localStorage.setItem('produtos', JSON.stringify(estoque));
            setProduto('');
            setNome('');
            setSelect('0');
            alert('Produto adicionado!');
        } else {
            const novoProd = [{
                "id": 20,
                "tipo": select,
                "titulo": nome,
                "desc": produto 
            }];
            localStorage.setItem('produtos', JSON.stringify(novoProd));
            setProduto('');
            setNome('');
            setSelect('0');
            alert('Produto adicionado!');
        }
        }
    }

    function handleSelect(e) {
        setSelect(e.target.value);
    }

    function handleAddCliente(e) {
        e.preventDefault();

        if (localStorage.getItem('cliente') !== null) {

            const clienteNovo = {
                "nome": nomeCliente,
                "idade": idadeCliente
            }

            const clientes = JSON.parse(localStorage.getItem('cliente'));
            clientes.push(clienteNovo);
            localStorage.setItem('cliente', JSON.stringify(clientes));
            alert('Cliente adicionado ao banco de dados com sucesso!');
            setNomeCliente('');
            setIdadeCliente('');

        } else {

            const clienteNovo = [{
                "nome": nomeCliente,
                "idade": idadeCliente
            }]
            
            localStorage.setItem('cliente', JSON.stringify(clienteNovo));
            alert('Cliente adicionado ao banco de dados com sucesso!');
            setNomeCliente('');
            setIdadeCliente('');
        }
    }

    function handleApagarTudo () {
        localStorage.clear();
        alert('Todo o banco de dados foi apagado!');
    }
    function handleApagarUsuario () {
        localStorage.removeItem('clente');
        alert('Todos os usuários foram apagados do banco de dados!');
    }
    function handleApagarProd () {
        localStorage.removeItem('produtos');
        alert('Todos os produtos do banco de dados foram apagados!');
    }

    return (
        <div className='container'>
            <Header />
            <section className="cad-prod">
                <h1>Cadastro de produtos</h1>
                <form>
                    <input type="number" placeholder="ID do produto" onChange={ e => setIDe(e.target.value)} value={IDe} />
                    <select onChange={e => handleSelect(e)} value={select}>
                        <option value='0'>Escolher</option>
                        <option value='1'>Apple Watch</option>
                        <option value='2'>Iphone</option>
                        <option value='3'>Ipad</option>
                        <option value='4'>Apple Pencil</option>
                    </select>
                    <input type="text" placeholder="Nome do Produto" onChange={ e => setNome(e.target.value) } value={nome} />
                    <input type="text" placeholder="Desc do Produto" onChange={ e => setProduto(e.target.value) } value={produto} />
                    <button onClick={handleAdd}>Adicionar Produto</button>
                </form>
            </section>
            <section className="cad-usua">
                <h1>Cadasto de Usuários</h1>
                <form>
                <input type="text" placeholder="Nome do Cliente" onChange={ e => setNomeCliente(e.target.value) } value={nomeCliente} />
                <input type="number" placeholder="Idade do Cliente" onChange={ e => setIdadeCliente(e.target.value)} value={idadeCliente} />
                <button onClick={handleAddCliente}>Adicionar Cliente</button>
                </form>
            </section>
            <section className="banc-dados">
                <div>
                    <h1>Banco de Dados</h1>
                    <button onClick={handleApagarTudo}>Apagar tudo</button>
                </div>
                <div>
                    <h3>Cadastro de Usuários</h3>
                    <button onClick={handleApagarUsuario}>Apagar Usuários</button>
                </div>
                <div>
                    <h3>Cadastro de Produtos</h3>
                    <button onClick={handleApagarProd}>Apagar Produtos</button>
                </div>
            </section>
            <Foooter />
        </div>
    );
}