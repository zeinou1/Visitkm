export const BASE_URL = 'http://localhost:8000/api/v1'


//profile
export const useUser = () => {
    const id =  localStorage.getItem("userId");
    // const token = localStorage.getItem("userToken");
    const token = localStorage.getItem("userToken");
    console.log("testUser", id, token);
    // return { id: user.user.data._id, token: user.token };
    return { 
        id, 
        token,
        
     };
};