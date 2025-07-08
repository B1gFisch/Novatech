import {ButtonProps} from "./button.props";

function Button(props: ButtonProps) {

  return(
      <>
        <button onClick={props.onClick}>
          {props.children}
        </button>
      </>
  )
}

export default Button;
