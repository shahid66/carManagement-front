import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import BFContainer from "../ui/core/BFContainer";

const ContactInfo = () => {
  return (
    <div>
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-green-700 to-blue-900 text-white text-center py-10">
        <h1 className="text-3xl font-bold">Get in Touch</h1>
        <p>We’d love to hear from you!</p>
      </div>
      <BFContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="  px-4 mt-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-700 to-blue-900 bg-clip-text text-transparent ">
              Send Us a Message
            </h2>
            <form className="mt-6 bg-white shadow-lg p-6 rounded-lg w-full ">
              <div className="mb-4">
                <Label htmlFor="name" className="mb-2">
                  Name
                </Label>
                <Input type="text" id="name" name="name" value="" required />
              </div>
              <div className="mb-4">
                <Label htmlFor="email" className="mb-2">
                  Email
                </Label>
                <Input type="email" id="email" name="email" value="" required />
              </div>
              <div className="mb-4">
                <Label htmlFor="message" className="mb-2">
                  Message
                </Label>
                <Textarea id="message" name="message" value="" required />
              </div>
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                Send Message
              </Button>
            </form>
          </div>

          <div className="w-full px-4 mt-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-700 to-blue-900 bg-clip-text text-transparent ">
              Contact Information
            </h2>

            <div className="mb-6">
              <div className="space-y-4 pt-6">
                <div>
                  <h3 className="text-lg font-semibold">Address</h3>
                  <p>123 Property Street, City Name, Country</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p>+1 (123) 456-7890</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p>support@yourdomain.com</p>
                </div>
              </div>
              <div className="mt-6">
                <iframe
                  title="Dhaka Map"
                  src="https://www.google.com/maps?q=Dhaka&output=embed"
                  width="100%"
                  height="350"
                  className="rounded-xl border"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </BFContainer>
    </div>
  );
};

export default ContactInfo;
