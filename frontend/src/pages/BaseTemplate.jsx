import Container from "react-bootstrap/esm/Container";
import NavigationBar from "../components/NavigationBar";
import { useState, useEffect } from "react";

import { UserContext } from "../context/UserContext";

export default function BaseTemplate({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auth/user");
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setUser(null);
      }
    };

    fetchUser();
  }, []);
  return (
    <UserContext.Provider value={user}>
      <Container>
        <NavigationBar user={user} />
        {children}
        <footer className="mt-5">
          <hr />
          <p className="text-center">
            &copy; {new Date().getFullYear()} Apartment Finder. All rights
            reserved.
          </p>
        </footer>
      </Container>
    </UserContext.Provider>
  );
}
