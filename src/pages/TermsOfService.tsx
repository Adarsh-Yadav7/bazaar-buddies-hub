export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: December 2024</p>
        </div>

        <div className="prose max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using AgriBazaar, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Use License</h2>
            <p className="text-muted-foreground">
              Permission is granted to temporarily download one copy of the materials on AgriBazaar's website for personal, 
              non-commercial transitory viewing only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Disclaimer</h2>
            <p className="text-muted-foreground">
              The materials on AgriBazaar's website are provided on an 'as is' basis. AgriBazaar makes no warranties, 
              expressed or implied, and hereby disclaims and negates all other warranties including without limitation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Limitations</h2>
            <p className="text-muted-foreground">
              In no event shall AgriBazaar or its suppliers be liable for any damages (including, without limitation, 
              damages for loss of data or profit, or due to business interruption).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Account Responsibilities</h2>
            <p className="text-muted-foreground">
              Users are responsible for maintaining the confidentiality of their account information and for all activities 
              that occur under their account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Prohibited Uses</h2>
            <p className="text-muted-foreground">
              You may not use our service for any illegal or unauthorized purpose nor may you, in the use of the service, 
              violate any laws in your jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Service, please contact us at legal@agribazaar.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}