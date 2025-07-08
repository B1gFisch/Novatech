import "./card.style.css";
import {CardProps} from "./card.props";
import Button from "../button/button.component";

//part of this code (especially part of the css) was taken from the Internet, of course I had to adjust it, so it fits my page
function Card(props: CardProps) {

  return(
      <>
        <div className="container">
          <div className="card">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <span>Hover here</span>
            <div className="pic"></div>
            <Button onClick={props.onClick}>{}</Button>
          </div>
        </div>
      </>
  )
}

export default Card;