import {SupabaseClient} from "@supabase/supabase-js";

export async function getUser(supabase: SupabaseClient) {
    const { data, error } = await supabase.auth.getSession()
    return data;
}