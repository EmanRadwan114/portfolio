import { supabase } from "./supabase-client";

const fetchProjects = async () => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) throw error;

  return data;
};

const fetchSkills = async (page = 1) => {
  const LIMIT = 10;
  const from = (page - 1) * LIMIT;
  const to = from + LIMIT - 1; //0-VALUE BASED

  const { data, error, count } = await supabase
    .from("skills")
    .select("*", { count: "exact" })
    .range(from, to)
    .order("created_at", { ascending: true });

  if (error) throw error;

  return { skills: data, totalCount: count || 0 };
};

export { fetchProjects, fetchSkills };
