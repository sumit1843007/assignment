"use client";
import { useFetchDialogues } from "@/service/queries";

const Dialogues = () => {
  //   const [searchTerm, setSearchTerm] = useState("");
  const {
    isFetching,
    error,
    data,
    isLoading: useFatchDialoguesLoading,
    isSuccess,
  } = useFetchDialogues();

  return (
    <>
      <h2 className="text-4xl text-white text-center my-5">Dialogues</h2>

      <div className="quotes flex items-center justify-center gap-3 flex-wrap my-5 ">
        {useFatchDialoguesLoading ? <span>Loading...</span> : null}
        {data?.map((dialogues: any, index: any) => (
          <div className="flex items-center justify-center gap-3" key={index}>
            <div className="service-card w-[300px] min-h-[300px] shadow-xl cursor-pointer rounded-md snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127]">
              <p className="font-bold text-2xl group-hover:text-white text-black/80">
                {dialogues.series}
              </p>
              <p className="text-gray-400 text-sm">{dialogues.text}</p>
              <p className="text-gray-400 text-sm">{dialogues.character}</p>
              <p className="text-5xl font-bold self-end">{index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dialogues;
