import { useQuery, useMutation } from "@tanstack/react-query"
import {  fetchDialogues ,fetchQuotes,fetchProverbs} from "./api"

export function useFetchDialogues() {
 return useQuery({
  queryKey: ['dialogues'],
  queryFn: fetchDialogues,
  retry: 0,
 });
}
export function useFetchQuotes() {
    return useQuery({
     queryKey: ['quotes'],
     queryFn: fetchQuotes,
     retry: 0,
    });
   }

   export function useFetchProverbs() {
    return useQuery({
     queryKey: ['proverbs'],
     queryFn: fetchProverbs,
     retry: 0,
    });
   }








