"use client";

export const getUser = async (supabase) => {
    const { data, error } = await supabase.auth.getSession()
}