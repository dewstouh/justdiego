export default function Calendly() {
  return (
      <div className="w-full max-w-4xl mx-auto">
          <div className="bg-gray-50 border-2 border-gray-200 p-8 text-center">
              <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Schedule a Meeting</h4>
                  <p className="text-gray-600">
                      Let&apos;s discuss your project in detail. Choose a time that works for you.
                  </p>
              </div>

              {/* Calendly Embed */}
              <div className="bg-white border-2 border-gray-300 min-h-[600px] flex items-center justify-center">
                  {/* TODO: Replace with your actual Calendly embed code */}
                  <div className="text-center">
                      <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                          📅
                      </div>
                      <h5 className="font-bold text-gray-900 mb-2">Calendly Integration Coming Soon</h5>
                      <p className="text-gray-600 mb-4">
                          Calendly widget will be embedded here.<br />
                          For now, please use the contact form or reach out directly.
                      </p>
                      <a
                          href="mailto:hello@justdiego.com"
                          className="inline-block bg-gray-900 text-white px-6 py-3 border-2 border-gray-900 font-bold hover:bg-white hover:text-gray-900 transition-colors"
                      >
                          Email Me Directly →
                      </a>
                  </div>
              </div>
          </div>
      </div>
  )
}
