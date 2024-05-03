import style from './Register.module.css'

import {useState, useEffect} from 'react'

const Register = () => {


    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassWord] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        setError("")

        const user = {
            displayName,
            email,
            password
        }

        if(password !== confirmPassword){
            setError("As senhas precisam ser iguais!")
            return
        }

        console.log(user)
    }

  return (
    <div className={style.register}>
        <h1>Cadastre-se para postar</h1>
        <p>Crie uma conta para compartinhas suas histórias!</p>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome:</span>
                <input type='text' name='displayname' required placeholder='Nome do usuário'
                    value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>
            </label>
            <label>
                <span>E-mail:</span>
                <input type='email' name='email' required placeholder='E-mail do usuário'
                    value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>
                <span>Senha:</span>
                <input type='password' name='password' required placeholder='Insira sua senha'
                    value={password} onChange={(e) => setPassWord(e.target.value)}/>
            </label>
            <label>
                <span>Confirmação de senha:</span>
                <input type='password' name='ConfirmPassword' required placeholder='Confime a  sua senha'
                    value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            </label>
            <button className='btn'>Cadastrar</button>
            {error && <p className='error'>{error}</p>}
        </form>
        
    </div>
  )
}

export default Register