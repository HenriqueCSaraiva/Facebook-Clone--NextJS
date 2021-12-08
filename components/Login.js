import Image from "next/image";
import { auth, provider } from "../firebase";
import { useAppValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Login() {
  const [state, dispatch] = useAppValue();

  const signIn = () => {
    //sign In
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="grid place-items-center">
      <Image
        src="https://links.papareact.com/t4i"
        height={400}
        width={400}
        objectFit="contain"
      />
      <h1
        onClick={signIn}
        className="bg-blue-500 cursor-pointer p-5 rounded-full text-center text-white"
      >
        Login with Facebook
      </h1>
    </div>
  );
}

export default Login;
