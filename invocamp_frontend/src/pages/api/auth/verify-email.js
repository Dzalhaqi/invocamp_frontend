import axios from "axios"

export default async function verifyEmail(req, res) {
  const { code } = req.query

  try {
    // post request to the backend to verify the email
    const response = await axios.post(`${process.env.BASE_URL}/api/auth/verify-email/`, {
      code: code,
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `${error}` });
  }
}
