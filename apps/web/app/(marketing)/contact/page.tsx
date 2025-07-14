import Page from '../_components/Page';
import Contact from './_components/Contact';
export default function ContactPage() {
  return (
    <Page>
      <Page.Header 
        title="Will your business be next?"
        description="Reach out below, and we will get back to in less than 24 hours."
            />
            
      <Page.Content>
        <Contact />
        </Page.Content>
    </Page>
  );
}
