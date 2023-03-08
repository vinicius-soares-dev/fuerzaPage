import Header from "../../components/Nav";
import Logo from '../../assets/img/fuerzalogo.png'



function Home() {
    return(
        <>
            <div>
                <Header />
            </div>

            <div className="main-content">
                <div className="main-1stchildren">
                    <img src={Logo} className="logo" alt="logofuerza"/>
                </div>
                <div className="main-2ndchildren">
                    <h4> Fuerza E-sports</h4>
                    <p>Organização de equipes e-sports, torneios e eventos relacionados.</p>
                </div>
            </div>
        </>
            
        

       
    )
}

export default Home;