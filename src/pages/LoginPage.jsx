import React from "react";

function LoginPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <button
        onClick={() => window.location.href = '/home'}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Login with Google
      </button>
    </div>
  );
}

export default LoginPage;
