import Page from '../_components/Page';
import Contact from './_components/Contact';
export default function ContactPage() {
  return (
    <Page>
      <Page.Header 
        title="Will your business be next?"
        description="Contact us here to answer any questions about our services or specific inquiries. If you need a custom project, we'll be happy to assist you."
            />
            
      <Page.Content>
        <Contact />
        </Page.Content>
    </Page>
  );
}
