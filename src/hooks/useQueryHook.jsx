import { useQuery } from "@tanstack/react-query";

const useQueryHook = () => {
  const { isLoading,refetch, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
        const res = await fetch(``);
       return  res.json();
    },
  });
    return [isLoading, refetch, data];
};

export default useQueryHook;
