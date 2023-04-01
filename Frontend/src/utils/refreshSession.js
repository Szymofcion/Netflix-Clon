
const refreshSession = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
  
    if (!refreshToken) {
      return false;
    }
  
    const refreshResponse = await fetch(
      "http://localhost:3000/api/auth/refresh",
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          refreshToken,
        }),
      }
    );
  
    if (!refreshResponse.ok) {
      return false;
    }
  
    const data = await refreshResponse.json();
  
    if (data.refreshToken) {
      localStorage.setItem("refreshToken", data.refreshToken);
    }
  
    if (data.accessToken) {
      sessionStorage.setItem("accessToken", data.accessToken);
      return true;
    }
  
    return false;
  };

  export default refreshSession