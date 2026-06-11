import { AnnouncementBar } from "./AnnouncementBar";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50">
        <AnnouncementBar />
      </div>
      <Header />
      {children}
      <Footer />
    </>
  );
}
