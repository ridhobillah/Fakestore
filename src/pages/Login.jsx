import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import ToastFailed from "../components/ToastFailed";
import { Spinner } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";


export default function Login() {
  const { login } = useContext(AuthContext);


  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [form, setFrom] = useState({    
    email: "",
    password: "",
  });

  function submitForm() {
    setLoading(true);
    processLogin();

    if (form.email == "" || form.password == "") {
      setError("Gagal! pastikan email atau password terisi");
    } else {
      processLogin();
    }
    console.log(form);
  }

  async function processLogin() {
    const url = "https://api.escuelajs.co/api/v1/auth/login";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();
      if (!result.access_token) {
        // kalau response nya ga ada access_token, berarti gagal login
        throw new Error("Email dan password tidak sesuai");
      }

      localStorage.setItem("access_token", result.access_token);
      localStorage.setItem("refresh_token", result.refresh_token);

      setError("");
      login();
      //pindahkan ke halaman keranjang
      // <Link> pindah melalui HTML, useNavigate pindah melalui JS
      navigate("/cart")

    } catch (error) {
      setError("Gagal! pastikan email atau password sesuai");
    } finally {
         setLoading(false);
    }
    
  }

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
        navigate("/cart")
    }
  }, []);

  return (
    <>
      {error != "" && <ToastFailed error={error} />}

      <div className="w-100 block mx-auto mt-20 p-9 bg-black rounded-2xl">
        <h1 className="text-2xl mb-5 text-center text-white">LOGIN</h1>
        <form className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1">Your email</Label>
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="masukan email..."
              required
              // mengubah nilai dari state form bagian email sesuai value input ketika mengetikan data
              onKeyUp={(e) => setFrom({ ...form, email: e.target.value })} //... = spritoperator
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1">Your password</Label>
            </div>
            <TextInput
              id="password1"
              type="password"
              required
              onKeyUp={(e) => setFrom({ ...form, password: e.target.value })}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          {loading ? (
            <Button disabled color="alternative">
              <Spinner aria-label="Default status example" />
              Sedang mengambil data....
            </Button>
          ) : (
            <Button type="button" onClick={submitForm}>
              Login
            </Button>
          )}
        </form>
      </div>
    </>
  );
}
