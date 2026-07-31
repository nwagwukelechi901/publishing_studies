import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { AdmissionsPage } from "./pages/AdmissionsPage";
import { PostgraduatePage } from "./pages/PostgraduatePage";
import { FAQPage } from "./pages/FAQPage";
import { EventsPage } from "./pages/EventsPage";
import { NewsletterPage } from "./pages/NewsletterPage";
import type { Page } from "./types";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  // Scroll to the top whenever the page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "home":
        return <HomePage setPage={setPage} />;

      case "about":
        return <AboutPage setPage={setPage} />;

      case "admissions":
        return <AdmissionsPage setPage={setPage} />;

      case "postgraduate":
        return <PostgraduatePage setPage={setPage} />;

      case "events":
        return <EventsPage setPage={setPage} />;

      case "newsletter":
        return <NewsletterPage setPage={setPage} />;

      case "faq":
        return <FAQPage setPage={setPage} />;

      default:
        return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar current={page} setPage={setPage} />

      <main>{renderPage()}</main>
    </div>
  );
}