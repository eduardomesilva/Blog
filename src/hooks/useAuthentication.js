import { db } from "../firebase/config"

import { 
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    singOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () =>{
    const [error, setError] = useState(null)
    const [loading, setLoanding] = useState(null)

    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled(){
        if(cancelled){
            return
        }
    }

    const creatUser = async (data) => {
        checkIfIsCancelled()
        setLoanding(true)
        setError(null)

        try{
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user,{displayName: data.displayName})

            setLoanding(false)

          return user 
        } catch(error){

            console.log(error.message)
            console.log(typeof error.message)

                let systemErrorMessage

                if(error.message.includes("Password")){
                    systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres"

                }else if(error.message.includes("email-already")){
                    systemErrorMessage = "e-mail já cadastrado"
                } else{
                    systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde!!!"
                }
                setLoanding(false)
                setError(systemErrorMessage)
        }
    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return{
        auth, 
        creatUser, 
        error, 
        loading
    }
}