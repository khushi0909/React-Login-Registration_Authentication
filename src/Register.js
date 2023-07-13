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
},[])




  return (
    <div>


    </div>
  )
}

export default Register