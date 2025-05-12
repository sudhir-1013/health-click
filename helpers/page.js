// RegisterUser.js
export async function RegisterUser(data) {
  try {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null); // Handle empty or invalid JSON
      throw new Error(errorData?.message || 'Failed to register user');
    }

    return await response.json(); // Return the parsed JSON response
  } catch (error) {
    console.error('Error during user registration:', error.message);
    throw error;
  }
}


export async function loginUser(formData, toast, setIsAuth) {
  try {
    console.log("Sending login request with:", formData);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log("Response received:", data);

    if (res.ok) {
      localStorage.setItem("token", data.token);
      setIsAuth();
      return {
        success: true,
        user: data.user,
        message: `Welcome back! ${data.user.name || ""}`
      };
    } else {
      return {
        success: false,
        message: data.message || "Invalid credentials"
      };
    }
  } catch (err) {
    console.log("Login Error:", err);
    throw new Error("Something went wrong. Please try again!");
  }
}
