function RadioInputType(props){
    return  <>
        <input type="radio" name="answer"
         className="answer"
         onClick={props.onClick}
         id={props.option_id}/>
        <label htmlFor={props.option_id} id={props.lable_id}>
            {props.value}
        </label>
    </>
}

export default RadioInputType;