import Header from '../../components/Header/'
import Prod from '../../components/Produtos/'
import Foooter from '../../components/Footer/'

export default function Home() {
    return(
        <div className='container'>
            <Header />
            <section className='boasvindas'>
                <h1>Bem vindo ao melhor<br /><span>e-commerce do Brasil</span></h1>
            </section>
            <Prod />
            <Foooter />
        </div>
    );
}