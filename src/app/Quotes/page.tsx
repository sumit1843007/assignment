"use client";
import React, { useState } from "react";
import { useFetchQuotes } from "@/service/queries";

const Quotes = () => {
  const {
    error: useFetchQuotesError,
    data: useFetchQuotesData,
    isLoading: useFetchQuotesIsLoading,
  } = useFetchQuotes();

  // State to store the selected author
  const [selectedAuthor, setSelectedAuthor] = useState("All");

  // Array of authors including "All"
  const authors = ["All", ...(useFetchQuotesData?.authors || [])];
  const quotes = useFetchQuotesData?.quotes;

  // Filter quotes based on the selected author
  const filteredQuotes =
    selectedAuthor === "All"
      ? quotes
      : quotes?.filter((quote: any) => quote.author === selectedAuthor);

  return (
    <div className="mt-2">
      <h1 className="text-4xl text-white text-center my-5">Quotes</h1>

      {useFetchQuotesIsLoading ? (
        <span className="text-center w-full flex items-center justify-center">
          Loading... Authors
        </span>
      ) : (
        <div className="radio-inputs bg-zinc-400 my-10 flex flex-wrap max-sm: gap-5 max-sm:p-4">
          {/* Map through the authors array to generate radio inputs */}
          {authors.map((author: any, index: any) => (
            <label key={index} className="radio">
              <input
                type="radio"
                name="radio"
                value={author}
                // Set the selected author when the radio button is clicked
                onClick={() => setSelectedAuthor(author)}
                checked={selectedAuthor === author} // Check if the current author is selected
              />
              <span className="name">{author}</span>
            </label>
          ))}
        </div>
      )}
      {/* Display filtered quotes */}
      <div className="quotes flex items-center justify-center gap-3 flex-wrap my-5 ">
        {useFetchQuotesIsLoading ? <span>Loading Quotes</span> : null}
        {filteredQuotes?.map((quote: any, index: any) => (
          <div className="flex items-center justify-center gap-3" key={index}>
            <div className="service-card w-[300px] min-h-[300px] shadow-xl cursor-pointer rounded-md snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127]">
              <p className="font-bold text-2xl group-hover:text-white text-black/80">
                {/* {quote.author} */}
              </p>
              <p className="text-gray-400 text-sm">{quote.text}</p>
              <p className="text-5xl font-bold self-end">{index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quotes;
