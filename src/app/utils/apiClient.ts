type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface ApiOptions {
  method?: HttpMethod;
  body?: any;
  headers?: Record<string, string>;
  params?: Record<string, string | number>;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ;

console.log("API_BASE_URL",API_BASE_URL)

export const apiClient = async (endpoint: string, options: ApiOptions = {}) => {
  const { method = "GET", body, headers = {}, params } = options;


  const queryString = params
    ? `?${new URLSearchParams(params as any).toString()}`
    : "";

  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}${queryString}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!res.ok) {
      const error = await res.json().catch(() => ({}));
      throw new Error(error?.message || `Request failed: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error(`API Error: ${error}`);
    throw error;
  }
};
