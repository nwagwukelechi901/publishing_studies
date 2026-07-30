import { useState } from "react";
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar current={page} setPage={setPage} />
      {page === "home"         && <HomePage         setPage={setPage} />}
      {page === "about"        && <AboutPage        setPage={setPage} />}
      {page === "admissions"   && <AdmissionsPage   setPage={setPage} />}
      {page === "postgraduate" && <PostgraduatePage setPage={setPage} />}
      {page === "faq"          && <FAQPage          setPage={setPage} />}
      {page === "events"       && <EventsPage       setPage={setPage} />}
      {page === "newsletter"   && <NewsletterPage   setPage={setPage} />}
    </div>
  );
}
