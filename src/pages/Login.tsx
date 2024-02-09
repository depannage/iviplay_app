import logo from '../assets/Grouplogin.svg';
import { Form, Input } from 'antd'

const Login = () => {

    const handleOnchange = (e: any) => {
        // setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
        console.log(e.target.value)
    };

    // useEffect(() => {
    //     if (userConnected != null)
    //         navigate("/bold/dashboard")
    // }, [navigate, userConnected])

    // useEffect(() => {
    //     if (userConnected != null && userConnected !== undefined)
    //         navigate("/bold/dashboard")
    // }, [navigate, userConnected])

    return (
        <section className="flex flex-col flexCenter items-cent h-screen w-full log ">
            <div className="w-full flex items-center justify-center md:h-[40rem]  h-full padding-container">
                <div className="flex flex-col items-center gap-5 p-6 bg-white h-[28rem] w-[100%] md:w-[30%]  shadow-2xl rounded-lg  border ">
                    <div className={"flex flex-col w-full items-center gap-2"}>
                        <img src={logo} alt="" width={80} height={80}/>
                        <div className={"flex flex-col w-full items-center gap-2"}>
                            <h3 className='text-rouge-100 font-bold'>Connexion</h3>
                            <p className={"text-[12px]"}>Veuillez renseigner vos informations </p>
                        </div>
                    </div>
                    <Form className='flex flex-col gap-10 w-full'>
                        <Input size='large' placeholder='votre Identifiant' name='email' onChange={(e => handleOnchange(e))} />
                        <Input.Password size='large' placeholder='Mot de Passe' name='password' onChange={(e => handleOnchange(e))} />
                        <button className='text-white bg-main h-10 rounded-lg font-bold' onClick={(e) => {
                            e.preventDefault();
                            // handleLogin(inputs, navigate);
                        }}>Me connecter</button>
                    </Form>
                </div>
            </div>
        </section>
    )
}

export default Login