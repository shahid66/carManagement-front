// app/success/page.tsx

import { paymentVerify } from "@/services/RequestService";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const resolvedSearchParams = await searchParams;
  const order_id = Array.isArray(resolvedSearchParams.order_id)
    ? resolvedSearchParams.order_id[0]
    : resolvedSearchParams.order_id;

  if (!order_id) {
    redirect("/error");
  }

  try {
    const response = await paymentVerify(order_id);
    const data = response?.data;
    console.log("Payment verification response:", data);

    return (
      <div>
        {data[0]?.bank_status === "Success" ? (
          <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div>
              <h1>✅ Payment Verification Success</h1>
              <p>
                <strong>Order ID:</strong> {order_id}
              </p>
              <p>
                <strong>Amount:</strong> {data[0]?.amount}
              </p>
            </div>
            <Link className="p-4" href="/">
              Go To Home
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1>❌ Payment Verification 1 Failed</h1>
            <p>Please try again later.</p>
            <Link className="p-4" href="/">
              Go To Home
            </Link>
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error("Payment verification error:", error);
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1>❌ Payment Verification Failed</h1>
        <p>Please try again later.</p>
        <Link href="/">Go To Home</Link>
      </div>
    );
  }
}
