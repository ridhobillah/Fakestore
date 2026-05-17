import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { IoArrowBack } from "react-icons/io5";

export default function ProfileComp({ data }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 flex gap-2">
        <Link to="/">
          <Button>
            <IoArrowBack />
            Back
          </Button>
        </Link>
        Profile
      </h1>

      <div className="flex items-center gap-9 justify-center" style={{padding:"175px"}}>
        <img
          src={data.avatar}
          alt={data.name}
          className="rounded-full" style={{boxShadow:"0 0 20px navy", height:"350px", width:"350px"}}
        />

        <div className="text-[30px]">
          <h1 className="font-bold">Name: {data.name}</h1>
          <h1 className="font-bold">Email: {data.email}</h1>
          <h1 className=" text-white font-bold text-xl rounded-full shadow-lg mt-2 px-6 py-2 text-center" style={{background:"navy"}}>
            {data.role}
          </h1>
        </div>
      </div>
    </div>

    
  );
}
