import { AnnouncementBar } from "./AnnouncementBar";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { PromoBar } from "./PromoBar";

const CHROME_HEIGHT = 41 + 49 + 57; // announcement + promo + header

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50">
        <AnnouncementBar />
        <PromoBar />
      </div>
      <Header />
      <div style={{ paddingTop: CHROME_HEIGHT }}>{children}</div>
      <Footer />
    </>
  );
}
