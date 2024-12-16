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
