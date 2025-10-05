export default function UserProfile({params}:any) {
  return (
    <div className=" justify-center items-center flex flex-col min-h-screen py-2 ">
      <h1>Profile</h1>
      <br />
      <p className="text-4xl">
        Corn{" "}
        <span className="p-2 rounded ml-2 text-black bg-orange-400">
          {params.id}
        </span>{" "}
      </p>
    </div>
  );
}
