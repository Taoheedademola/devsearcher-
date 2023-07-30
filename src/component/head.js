import moon from "../image/moon.png"
import sun from "../image/002-sun.png"
function Head(props) {
    return (
    <div className="head">
        <h1 className="h1" style={{color: props.gb ? "white" : "#687c9a"}}>devfinder</h1>
        <span className="dark"   style={{color: props.gb ? "white" : "#687c9a"}}>{props.gb ?  <span>Light</span> : <span>Dark</span>} 
        <img onClick={props.handleclick2} src={props.gb ? sun : moon} alt="" />
        </span>
    </div>)
}

export default Head