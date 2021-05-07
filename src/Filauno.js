// import Imagesexternals from './Imagesexternals';
import Button from './Button'
import Imagesexternals from './Imagesexternals'
function Filauno(){
    return (
        <div class = "fila_cuerpo">
            <span class ="cuerpo1">
        
                <h1 class = "titulosp">The place where you know people</h1>
                <p class = "descripciones">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                <Button text="Get Started" className= "button_body" />
    
            </span>
        
            <span class = "cuerpo2">
                <Imagesexternals webdirection="https://riasdegalicia.com/wp-content/uploads/2021/04/monigotes-1.png" /> 
                
            </span>

        </div>
    )
}
export default  Filauno;
