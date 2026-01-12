import { fetchSkills } from "@/services/supabase-services";
import { useQuery } from "@tanstack/react-query";

const useSkills = (page = 1) => {
  return useQuery({
    queryKey: ["skills", page],
    queryFn: () => fetchSkills(page),
  });
};

export default useSkills;
