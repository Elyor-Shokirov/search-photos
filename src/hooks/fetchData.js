// import { useQuery } from "react-query";
// import { useGlobalContext } from "./useGlobalContext";

// export const useDataQuery = () => {
//   const { searchTitle } = useGlobalContext();

//   console.log(searchTitle);
//   return useQuery(["data", searchTitle], async () => {
//     const response = await fetch(
//       `https://api.unsplash.com/search/photos?client_id=TahtPZwzsgccjfueF73XY3jnc5fmxn0LQyz2_VTc9kw&query=${searchTitle}&page=5`
//     );
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return await response.json();
//   });
// };
