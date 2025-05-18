"use client";

import Link from "next/link";  // Import the Link component for navigation
import ChatBox from "../components/ChatBox";

const Home = () => {
  return (
    <div className="container">
      <h1>AI Support Agent</h1>
      <ChatBox />
      
      {/* Link to the upload page */}
      <div>
        <Link href="/upload">
          <button>Go to Upload Page</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
