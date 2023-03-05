import './Button.css'

export function Button(props){
    return(
        <button className='button-partners' onClick= {props.onClick}>{props.value}</button>
    )
}