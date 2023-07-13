import React, { useState } from 'react'
import {useRef,useState,useEffect} from "react";
import {faCheck ,faTimes,faInfoCircle} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome"


const USER_REGEX = /^[a-zA_Z] [a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

import React from 'react'

const Register = () => {
const userRef = useRef();   //that will allow us to set the focus on the use input ,when the component loads 
const errRef = useRef();            //IF WE GET AN ERROR WE NEED TO FOCUS ON THAT so it can be announced by the screen reader for the accessibility 


const [user ,setUser] = useState('');           //will be tied to the user input 
const [validName,setValidName] = useState(false)        //boolean ,weather the name validated or not 
const [userFocus,setUserFocus] = useState(false)        //boolean ,weaher we are focused on tha input field or not 

const [pwd,setPwd] = useState('');
const [validPwd,setValidPwd] = useState(false)
const [pwdFocus,setPwdFocus] = useState(false)

const [matchPwd,setMatchPwd] = useState('')
const [validMatch,setValidMatch] = useState(false)
const [matchFocus,setMatchFocus] = useState(false)


useEffect(()=>{
    userRef.current.focus();

},[])           ///we apply for setting the focus when the component loads ,thers nothing in the dependency so this will only happen when the component load s and will set the focus on username 

useEffect (() =>{
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result)

},[user])//this will apply to the user name and this is where we validate the user name ,so user state is in the dependency array any time it changes,it will check the validation of that field 

useEffect (()=>{
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd)
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match)
},[pwd,matchPwd])


useEffect(()=>{
    setErrMsg('');
},[user,pwd,matchPwd])   //for err ms g,when we display an error messsage ,but anytime the user changes the information ,changes the state of oen of 3 ,then we will go ahead and clear out the message 

  return (
    <section>
            <p ref={errRef} className={errMsg?"errMsg" : "offscreen"} aria-live = "assertive"> 
                {errMsg}
            </p>       
             {/* //p displayed at the top of the form ,if the errormags state exist then apply the class errmsg which will display error masg otherwise we will apply the class offscreen which will take the whole  p positioned absolutely way off the screen ,but still be available to screen readers instead off dsispaly none and totally gone offf from the screen  */}
            {/* aria live aaertive meeans when we set the focus on this element that as ref of errref it will be announced on the screen with a screen reader  */}
                <h1>Register</h1>
                <form>
                    <label htmlFor="username">
                        Username:
                        <span className = {validName?"valid" : 'hide'}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </span>
                        <span className={validName || !user ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon = {faTimes}/>

                        </span>
                    </label>
                    <input
                    type='text'
                    id='username'
                    ref={userRef}
                    autoComplete='off'
                    onChange={(e)=>setUser(e.target.value)}//
                    required
                    aria-invalid={validName?"false" : "true"}// will be set to true whrn the comp loads becoz we will not have the vallid username ,this lets the screen reader announce weather the input field needs the adjusted before the form is accepted
                    aria-describeby = "uidnote" //lets us provide the another element that describes the input field ,so a screen reader wll read the label first and will read what type of field the label is addressing here its text .then it will also read th aria-invalid weather it has valid input or not and then it will jump tot he aria described by the element to give a full description and this is where we can put in the requirements ,that our registration form needs and have a screen reader read those 
                    onFocus={()=> setUserFocus(true)}
                    onBlur={ () => setUserFocus(false)} />


                    <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon = {faInfoCircle}/>
                        4 to 24 characters. <br/>
                        Must begin with a letter .<br/>
                        Letters,numbers,underscores,hyphens allowed .
                    </p>
                </form>
    </section>
  )
}

export default Register