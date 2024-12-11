import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";

const HotelHomePage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Hero Section */}
        <section style={styles.hero}>
          <div style={styles.overlay}>
            <h1 style={styles.heroText}>CAPITOL BOUTIQUE HOTEL</h1>
          </div>
        </section>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    margin: 0,
    padding: 0,
  },

  wrapper: {
    display: "flex",
    flexDirection: "row", // Row layout for hero section
    height: "100vh",
    backgroundImage: "url('/images/image1.jpg')", // Shared background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  },

  hero: {
    flex: 1, // Hero section takes up full width
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#fff",
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)",
  },

  heroText: {
    fontSize: "3rem",
    fontWeight: "bold",
  },
};

export default function Dashboard() {
  return (
    <AuthenticatedLayout>
      <Head title="Dashboard" />

      {/* Insert HotelHomePage Component */}
      <div>
        <HotelHomePage />
      </div>
    </AuthenticatedLayout>
  );
}
