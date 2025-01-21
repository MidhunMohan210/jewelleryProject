// import notFound from "../../assets/notFound/space.png";

function NotFound1({message}) {
  return (
    <div className="flex flex-col justify-center items-center gap-6 mt-10 ">
      {/* <img src={notFound} alt="" className="h-20 w-20 opacity-40" /> */}
      <h1 className="text-sm font-bold text-gray-400">{message}</h1>
    </div>
  );
}

export default NotFound1;
