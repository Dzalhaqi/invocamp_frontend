import axios from "axios"
import cookie from "cookie"

export const getUser = async (access) => {
  try {
    const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/auth/getUser`, {
      headers: {
        Cookie: `access=${access}`,
      },
    });
    return res;
  } catch (err) {
    return false;
  }
};