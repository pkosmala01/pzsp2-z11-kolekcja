import Cookies from "js-cookie";
import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import { AuthService } from "../../services";


const useLogin = (login: string, password: string) => {
  const navigate = useNavigate();

  const {mutate, isLoading, isError} = useMutation('login', async () => {
    return AuthService.login(login, password);
  },
  {
    onSuccess: (data) => {
      Cookies.set('accessToken', data['access_token'])
      navigate(-1);
    }
  }
  )

  return {mutate, isLoading, isError};
}

export default useLogin;