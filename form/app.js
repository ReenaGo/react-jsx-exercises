let TextInput = () => {
    return <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
}

let YesNoRadio = () => {
    return  <div>
    <input type="radio" name="acknowledgement" value="Yes" id="yes" />
    <label htmlFor="yes">Yes</label>
    <input type="radio" name="acknowledgement" value="No" id="no" />
    <label htmlFor="no">No</label>
  </div>
}

let SubmitButton = () => {
    return   <input type="submit" value="Submit"/>

}

let Form = () => {
    return <div>
        <TextInput/>
        <YesNoRadio/>
        <SubmitButton/>
    </div>
}


ReactDOM.render(<Form />, document.getElementById('root'))