import { SimplePage, createPageMetadata } from '../../../components/Page';
import Contact from './_components/Contact';

export const metadata = createPageMetadata(
  'Contact',
  'Reach out below, and we will get back to in less than 24 hours.',
  '/contact'
);

export default function ContactPage() {
  return (
    <SimplePage config={{
      title: "Will your business be next?",
      description: "Reach out below, and we will get back to in less than 24 hours."
    }}>
      <Contact />
    </SimplePage>
  );
}
