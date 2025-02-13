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

export async function loginUser(formData, toast) {
  try {
    console.log("Sending login request with:", formData); // Debugging

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData), // FIXED: Removed extra wrapping
    });

    const data = await res.json();

    console.log("Response received:", data); // Debugging

    if (res.ok) {
      localStorage.setItem("token", data.token);
      toast({
        title: "Login Successful",
        description: `Welcome back! ${data.user.name || ""}`,
      });
      return data.user;
    } else {
      toast({
        title: "Login Failed",
        description: data.message || "Invalid credentials",
        variant: "default",
      });
    }
  } catch (err) {
    console.log("Login Error:", err); // Debugging
    toast({
      title: "Error",
      description: "Something went wrong. Please try again!",
      variant: "default",
    });
  }
}
