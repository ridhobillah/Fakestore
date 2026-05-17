import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";
import ProfileComp from "../components/ProfileComp";

function Profile() {
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(true);

   async function getData() {
    const url = "https://api.escuelajs.co/api/v1/users/1";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      setProfile(result);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Spinner />
        Sedang mengambil data...
      </div>

    );
  }

  return <ProfileComp data={profile} />;
}

export default Profile;
