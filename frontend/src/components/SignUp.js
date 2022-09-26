import '../styles/SignUp.css'

function SignUp (){

    let handleSubmit = (e) =>{
        e.prevent.default();

        const inputEmail = e.target.email.value

        console.log(inputEmail)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label><br/>
                <input type='text' name='name' required="required" className='inputs'/><br/>

                <label>Apellido</label><br/>
                <input type='text' name='lastName' required="required" className='inputs'/><br/>

                <label>Documento de Identidad</label><br/>
                <input type='number' name='id' required="required" className='inputs'/><br/>

                <label>Mail</label><br/>
                <input type='email' name='email' required="required" className='inputs'/><br/>

                <label>Crear contraseña</label><br/>
                <input type='text' name='name' required="required" className='inputs'/><br/>
            </form>

        </div>
    )
}
export default SignUp;