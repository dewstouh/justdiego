import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/Card';

export default function CalendlyBooking() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Schedule a Meeting</CardTitle>
        <CardDescription>
          Let&apos;s discuss your project in detail. Choose a time that works for you.
        </CardDescription>
      </CardHeader>

      <CardContent className="h-[600px] p-0">
        <iframe
          className="w-full h-full border-0"
          src="https://calendly.com/justdiego/30min?embed_domain=justdiego.com&embed_type=Inline&hide_gdpr_banner=1"
          title="Schedule a meeting with Diego"
          allowFullScreen
        />
      </CardContent>
    </Card>
  );
}
