import React from 'react'
import { FormRegister } from './components/form'

const RegisterPage = () => {
  return (
    <FormRegister />
  )
}

export default RegisterPage


















































//   const Register = () =>{

//     const [username , setUsername] = useState("")
//     // const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
//     const [email , setEmail] = useState("")
//     const [password , setPassword] = useState("")
//     const [show , setShow] = useState(false)
//     const [checkPassword , setCheckPassword] = useState("")
//     const [error, setError] = useState (null);
//     const [alertt, setAlertt] = useState ("none");
//     const [alerttemail, setAlerttemail] = useState ("none");


//     const [backgroundImage, ] = useState (backimage);

//     const [avatar, ] = useState (frontimage);

//     // const _PORT = 3002

//     // const [backgroundImage, setBackgroundImage] = useState (backimage);
//     // const [avatar, setavatar] = useState (frontimage);

//     const handleEmailChange = (event) => {
//       setEmail(event.target.value);
//       // setEmail(event.target.value) 
//   };

//   const validateEmail = () => {
//     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
//     if (!emailRegex.test(email)) {
//         setError(false);
//     } else {
//         setError(true);
//     }
// };

// useEffect(() => {
//     validateEmail();
// }, [email]);


// console.log(error)

//     const [, setCookies] = useCookies(["accsee_token"])


//     var onSubmit = async(e) => {
//       //In order not to reload the page
//       e.preventDefault()

//       if(password === checkPassword && error){
//       const respawn = await Axios.post(`${import.meta.env.VITE_SERVER_PORT}/register`,{username, password, email, backgroundImage, avatar})
//         if(respawn.data.adminID){
//         setCookies("access_token" , respawn.data.token)
//         window.localStorage.setItem("userID", respawn.data.adminID)
//         window.location.replace(window.origin)
//         } 
//         if (respawn.data.message === "email already have" ){
//           setAlerttemail("block") + console.log("nottemail")
//         }
//     }else if (password !== checkPassword){
//       // setInterval(() => {
//         setAlertt("block") + console.log("nott")
//     // }, 2000);
//     }
//     }
  

//     const showThePassword = () => {
//       setShow(prev => !prev)
//   }


//   return (
//   <Container>
//   <section className="register_up" style={{marginTop:"150px" , marginBottom:"100px"}} >
//     <div className="container h-100">
//       <div className="row d-flex justify-content-center align-items-center h-100">
//         <div className="col-lg-12 col-xl-11">
//           <div className="card text-black ">
//             <div className="card-body p-md-5">
//               <div className="row justify-content-center">
//                 <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

//                   <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">تسجيل مستخدم جديد</p>

//                   <Form className="form" onSubmit={onSubmit}>

//                     <div className="d-flex flex-row align-items-center mb-4">
//                       <i className="fas fa-user fa-lg me-3 fa-fw"></i>
//                       <div className="form-outline flex-fill mb-0">
//                     <Form.Control type="text" placeholder="الأسم"
//                             id = "username" value={username}
//                             onChange={e => setUsername(e.target.value)}
//                             required
//                             style={{textAlign:"right"}}
//                     />
//                     </div>
//                     </div>

//                     <div className="d-flex flex-row align-items-center mb-4">
//                       <i className="fas fa-user fa-lg me-3 fa-fw"></i>
//                       <div className="form-outline flex-fill mb-0">
//                     <Form.Control type="email" placeholder="البريد الألكتروني"
//                             id = "email" value={email}
//                             onChange={handleEmailChange}
//                             className={`border border-${error || !email ? "" : "danger"}`}
//                             required
//                     />
//                     </div>
//                     </div>

//                     <div className="d-flex flex-row align-items-center mb-4">
//                       <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
//                       <div className="form-outline flex-fill mb-0 position-relative">
//                     <Form.Control type={!show ? "password" : "text"} placeholder="كلمة المرور" 
//                             id="password" value={password}
//                             onChange={e => setPassword(e.target.value)}
//                             pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
//                             required
//                             />
//                     {password && <Icons.AiFillEye onClick={showThePassword} style={{position:"absolute", top:"11px", right:"10px", color:"#9f9f9f", cursor:"pointer", fontSize:"19px"}}/>}
//                     <label htmlFor="password" style={{fontSize:"12px", display:"block", textAlign:"right", color:"#9f9f9f"}}>يجب أن يحتوي على حرف كبير , رقم واحد على الأقل و أن يكون من ثماني كلمات او أكثر &#42;</label>
//                     </div>
//                     </div>

//                     <div className="d-flex flex-row align-items-center mb-4">
//                       <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
//                       <div className="form-outline flex-fill mb-0  position-relative">
//                     <Form.Control type={!show ? "password" : "text"} placeholder="اعد كتابة كلمة المرور" 
//                             id="checkPassword" value={checkPassword}
//                             onChange={e => setCheckPassword(e.target.value)}
//                             pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
//                             required
//                     />
//                     </div>
//                     </div>

//                     <div className="form-check d-flex justify-content-center mb-5">
//                     <label className="form-check-label" htmlFor="form2Example3c" style={{paddingRight:"30px"}}>
//                         أنا أوافق على جميع <a href="/TermsAndConditions" target="_blank">الشروط و الأحكام</a>
//                       </label>
//                     <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" required/>
//                     </div>

//                     <Button style={{width:"100%"}} variant="success" type="submit">تسجيل</Button>
//                     {/* {label === "login"? 
//                     <Link to="/register" className="nav-link">تسجيل مستخدم جديد</Link>
//                     :
//                     <> */}
//                     <p>لدي حساب مسبق</p>
//                      <a href="/login">تسجيل دخول</a>
//                     {/* </>
//                     } */}
//                   </Form>

//                   {/* {error && (
//                 <div className="bg-red-800 p-4 font-bold text-white">
//                     {error}
//                 </div>
//             )} */}
  
//                 </div>
//                 <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
  
//                   <img src={regImg} className="img-fluid" />
  
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//         <div className="alertt" style={{display:alertt}}>
//         <span className="closebtn" onClick={()=> setAlertt("none")}>&times;</span> 
//         <strong>تحذير!</strong> كلمة المرور غير متطابقة
//         </div>

//         <div className="alerttEmail" style={{display:alerttemail}}>
//         <span className="closebtn" onClick={()=> setAlerttemail("none")}>&times;</span> 
//         <strong>تحذير!</strong> البريد الألكتروني مستخدم
//         </div>
//   </section>
//   </Container>
//     )
//   }



// export default Register