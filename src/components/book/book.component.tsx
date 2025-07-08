import {BookProps} from "./book.props";
import "./book.style.css";

function Book (props: BookProps) {

  return (
      <>
        <div className="bookContainer">
          <div className="bookImage">
            <img src={props.imageSrc} alt={"Book Cover" + props.title} />
          </div>
          <div className="bookContent">
            <h2 className="bookTitle">{props.title}</h2>
            <p className="bookDescription">{props.description}</p>
          </div>
        </div>
      </>
  )
}

export default Book;