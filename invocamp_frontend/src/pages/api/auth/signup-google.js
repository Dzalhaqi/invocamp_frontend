export default async (req, res) => {
  try {
    const res = await fetch("/api/auth/google", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === 200) {
      const data = await res.json();
      setUrl(data.url);

      const newWindow = window.open(
        data.url,
        "_blank",
        "location=yes,height=570,width=520,scrollbars=yes,status=yes,'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no,"
      );
      if (newWindow) {
        newWindow.focus();
      } else {
        throw new Error("Failed to open OAuth2 authentication page.");
      }

    } else {
      throw new Error(await res.text());
    }
  } catch (error) {
    setError(error.message);
  }
}
