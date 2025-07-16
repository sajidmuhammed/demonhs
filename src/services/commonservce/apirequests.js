'use client'

const BASE_URL =
  typeof window === "undefined"
    ? process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    : "";

export const apiRequest = async (url, method = 'GET', data = null) => {
  
  
  try {
    const fullUrl = `${BASE_URL}${url}`;
    const config = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", 
    };

    if (data && method !== 'GET') {
      config.body = JSON.stringify(data);
    }

    const res = await fetch(fullUrl, config);
    
    const result = await res.json();
    
    return result;
  } catch (error) {
    console.error(`API ${method} Error:`, error.message);
    throw error;
  }
};
