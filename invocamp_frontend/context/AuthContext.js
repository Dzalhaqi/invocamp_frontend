import axios from "axios"
import { useState, useEffect, createContext } from "react"
import { useRouter } from "next/router"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);
  const [updated, setUpdated] = useState(null);
  const [uploaded, setUploaded] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      loadUser();
    }
  }, [user]);

  // Login user
  const login = async ({ email, password }) => {
    try {
      setLoading(true);

      const res = await axios.post("/api/auth/login", {
        email,
        password,
      });

      if (res.data.success) {
        loadUser();
        setIsAuthenticated(true);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      setError(
        err.response &&
        (err.response.data.error.detail || err.response.data.error)
      );
    }
  };

  // Register user
  const register = async ({ firstName, lastName = "", type, email, password, confPassword }) => {
    try {
      setLoading(true);
      const res = await axios({
        method: 'POST',
        url: `${process.env.API_URL}/api/auth/register/`,
        data: {
          first_name: firstName,
          last_name: lastName,
          account_type: type,
          email,
          password,
          password_confirmation: confPassword,
        },
      });

      if (res.data) {
        setLoading(false);
        router.push("/auth/login");
      }
    } catch (err) {
      setLoading(false);
      setError(
        err.response &&
        (err.response.data.detail || err.response.data)
      );
    }
  };

  // Login google user
  const signIn = async ({ username, password }) => {
    try {
      setLoading(true);

      const res = await axios.get("/api/auth/login")

      if (res.data.success) {
        setLoading(false);
        console.log(res.data)
      }
    } catch (error) {
      setLoading(false);
      setError(
        error.response &&
        (error.response.data.detail || error.response.data.error)
      );
    }
  };

  // Register google user
  const signUp = async ({ firstName, lastName, email, password }) => {
    try {
      setLoading(true);

      const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/auth/signup-google`);

      if (res.data.message) {
        console.log(res.data)
        setLoading(false);
        // router.push("/login");
      }
    } catch (error) {
      console.log(error.response);
      setLoading(false);
      setError(
        error.response &&
        (error.response.data.detail || error.response.data.error)
      );
    }
  };


  // Update user
  const updateProfile = async (
    { firstName, lastName, email, password },
    access_token
  ) => {
    try {
      setLoading(true);

      const res = await axios.put(
        `${process.env.API_URL}/api/me/update/`,
        {
          first_name: firstName,
          last_name: lastName,
          email,
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      if (res.data) {
        setLoading(false);
        setUpdated(true);
        setUser(res.data);
      }
    } catch (error) {
      console.log(error.response);
      setLoading(false);
      setError(
        error.response &&
        (error.response.data.detail || error.response.data.error)
      );
    }
  };

  // Upload Resume
  const uploadResume = async (formData, access_token) => {
    try {
      setLoading(true);

      const res = await axios.put(
        `${process.env.API_URL}/api/upload/resume/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      if (res.data) {
        setLoading(false);
        setUploaded(true);
      }
    } catch (error) {
      console.log(error.response);
      setLoading(false);
      setError(
        error.response &&
        (error.response.data.detail || error.response.data.error)
      );
    }
  };

  // Load user
  const loadUser = async () => {
    try {
      setLoading(true);

      const res = await axios.get("/api/auth/getUser");

      if (res.data.user) {
        setIsAuthenticated(true);
        setLoading(false);
        setUser(res.data.user);
      }
    } catch (error) {
      setLoading(false);
      setIsAuthenticated(false);
      setUser(null);
      setError(
        error.response &&
        (error.response.data.detail || error.response.data.error)
      );
    }
  };

  // Logout user
  const logout = async () => {
    try {
      const res = await axios.post("/api/auth/logout");

      if (res.data.success) {
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (error) {
      setLoading(false);
      setIsAuthenticated(false);
      setUser(null);
      setError(
        error.response &&
        (error.response.data.detail || error.response.data.error)
      );
    }
  };

  // Confirm Email
  const confirmEmail = async (token) => {
    try {
      const res = await axios.get(`${process.env.API_URL}/api/auth/confirm-email/${token}`);

      if (res.data.success) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
        router.push("/auth/login");
      }
    } catch (err) {
      setLoading(false);
      setIsAuthenticated(false);
      setUser(null);
      setError(
        err.response &&
        (err.response.data.error.detail || err.response.data.error)
      );
    }
  }

  // Clear Errors
  const clearErrors = () => {
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        user,
        error,
        isAuthenticated,
        updated,
        uploaded,
        login,
        confirmEmail,
        register,
        updateProfile,
        logout,
        setUpdated,
        setUploaded,
        uploadResume,
        clearErrors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;