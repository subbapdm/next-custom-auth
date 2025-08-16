"use client"

import { useEffect, useState } from "react";

export default function useCurrentUser(){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch("/api/auth/me");
                
                if(!res.ok){
                    throw new Error("Failed to fetch user");
                }

                const data = await res.json();
                setUser(data.user);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchUser();
    }, []);

    return { user, loading, error };
}