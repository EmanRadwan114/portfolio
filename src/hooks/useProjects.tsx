import { fetchProjects } from "@/services/supabase-services";
import { useQuery } from "@tanstack/react-query";

const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: () => fetchProjects(),
  });
};

export default useProjects;
