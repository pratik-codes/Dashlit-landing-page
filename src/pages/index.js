import Layout from "components/layout";
import SEO from "components/seo";
import { StickyProvider } from "contexts/app/app.provider";
import Banner from "sections/banner";
import Blogs from "sections/blogs";
import CallToAction from "sections/call-to-action";
import FAQ from "sections/faq";
import Featured from "sections/featured";
import Jackpot from "sections/jackpot";
import Pricing from "sections/pricing";
import Services from "sections/services";
import Subscribe from "sections/subscribe";
import Testimonials from "sections/testimonials";
import theme from "theme";
import { ThemeProvider } from "theme-ui";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Dashlit, World's best browser productivity dashboard 🚀" />
          <Banner />
          <Services />
          {/* <Jackpot /> */}
          {/* <CallToAction /> */}
          <Featured />
          <Pricing />
          {/* <Testimonials />
          <Blogs /> */}
          {/* <FAQ /> */}
          <Subscribe />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
