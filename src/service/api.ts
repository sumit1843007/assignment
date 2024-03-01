import axios from 'axios';
import axiosInstance from './axiosInstance';
import { globalErrorHandler } from './globalErrorHandler';


export const fetchDialogues= async () => {
 return globalErrorHandler(() => axios.get('https://wordsapi-nkj3.onrender.com/dialogues'));
};
export const fetchQuotes= async () => {
    return globalErrorHandler(() => axios.get('https://wordsapi-nkj3.onrender.com/quotes'));
   };
   export const fetchProverbs= async () => {
    return globalErrorHandler(() => axios.get('https://wordsapi-nkj3.onrender.com/proverbs'));
   };

// export const fetchialogues = async (note: any) => {
//     return globalErrorHandler(() => axios.get('https://wordsapi-nkj3.onrender.com/dialogues'));
// };