import axios from 'axios';

       
const Index = ({dados}) => (
    <div className="container">
        <center><h1>Consumindo API com REACT e NEXT</h1></center>
        {console.log(dados)}

        <ul>
            {dados.map(artigo => (
                <li key={artigo._id}>
                    <h2>{artigo.titulo}</h2>
                    <img src={artigo.capa} width={300}/>
                    <br/><b>{artigo.categoria}</b>
                    <p>{artigo.subtitulo}</p><br/>
                </li>
            ))}
        </ul>
    </div>
);

Index.getInitialProps = async () =>{
    const response = await axios.get(
        'https://sujeitoprogramador.com/rn-api/?api=posts'
    );

    return { dados:  response.data}
        }


export default Index; 