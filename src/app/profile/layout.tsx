import "./_styles/all.css";
import "./_styles/blog.css";
import "./_styles/common.css";
import "./_styles/contact.css";
import "./_styles/index.css";
import "./_styles/singleBlog.css";
import Header from "../components/header";
import Footer from "../components/footer";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
