export default function TermsPrivacy() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms of Use & Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Terms of Use</h2>
        <p className="mb-4">
          By accessing and using this website, you agree to comply with the
          following terms and conditions:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>You must be at least 18 years old to use this service.</li>
          <li>
            Do not misuse or engage in any unlawful activity on our platform.
          </li>
          <li>
            We reserve the right to modify or terminate our services at any
            time.
          </li>
          <li>
            Your use of this website is at your own risk, and we are not
            responsible for any damages.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Privacy Policy</h2>
        <p className="mb-4">
          We value your privacy and are committed to protecting your personal
          information.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            We collect and store data such as your name, email, and browsing
            activities for service improvement.
          </li>
          <li>
            Your data will not be shared with third parties without your
            consent, except as required by law.
          </li>
          <li>We use cookies and analytics to enhance user experience.</li>
          <li>
            You have the right to request the deletion of your personal data.
          </li>
        </ul>
      </section>
    </div>
  );
}
