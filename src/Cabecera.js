import Button from './Button'

function Cabecera(){
    return(
    <div className="cap">
    <div className="logo_container">
        <img src="https://riasdegalicia.com/wp-content/uploads/2021/04/logo.png"></img>
    </div>
    <div className="menu_container">
        <p>How it works  </p>   
        <Button text="login" className="button_primary"/>
        <Button text="Sign up" className="button_secundary"/>
    </div>
    </div>
    )
}
export default Cabecera;