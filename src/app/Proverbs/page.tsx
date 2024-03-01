"use client";
import { useFetchProverbs } from "@/service/queries";

const Proverbs = () => {
  //   const [searchTerm, setSearchTerm] = useState("");
  const {
    isFetching,
    error,
    data,
    isLoading: useFatchProverbsLoading,
    isSuccess,
  } = useFetchProverbs();

  return (
    <>
      <h1 className="text-4xl text-white text-center my-5">Proverbs</h1>

      <div className="quotes flex items-center justify-center gap-3 flex-wrap my-5 ">
        {useFatchProverbsLoading ? <span>Loading...</span> : null}
        {data?.map((Proverb: any, index: any) => (
          <div className="flex items-center justify-center gap-3" key={index}>
            <div className="service-card w-[300px] min-h-[300px] shadow-xl cursor-pointer rounded-md snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127]">
              <p className="text-gray-400 text-sm">{Proverb.text}</p>
              <p className="text-gray-400 text-sm">
                <span className="font-semibold text-black-700">Origin:</span>
                {Proverb.origin}
              </p>
              <p className="text-5xl font-bold self-end">{index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Proverbs;
