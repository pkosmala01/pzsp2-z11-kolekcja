const isLogged = () => {
  if (localStorage.getItem("accessToken") != null){
    return true;
  }
  return false;
}

export default isLogged