import Image from "next/image";
import React from "react";
import flower from "@/assets/flower onlady.png";

const page = () => {
  return (
    <div>
      <Image
        src={flower}
        alt="flower on lady"
        width={600}
        height={600}
        className="object-cover relative"
      />
      <h1 className=" absolute bottom-10 py-20 items-center left-60 text-3xl font-bold text-center text-green-700 justify-between px-60">
        Frequently Asked Questions (FAQs)
      </h1>
      <h2 className=" absolute bottom-10 py-10 items-center left-60 text-3xl font-bold text-center text-green-700 justify-between px-60">
        - Toyinno BeautyHub
      </h2>
      <div className="text-primeColor bg-white py-4 px-10">
        <p>
          <ol>
            <li>
              <strong>What is Toyinno BeautyHub? </strong>
              <p>
                Toyinno BeautyHub is a premier online destination for skincare,
                haircare, and fragrance products. We curate a selection of
                high-quality products to help individuals enhance their beauty
                routines and embrace self-care.{" "}
              </p>
            </li>
            <li>
              <strong>What products do you offer?</strong>
              <p>
                We offer a wide range of products including skincare essentials
                like moisturizers, serums, and cleansers, haircare products such
                as shampoos, conditioners, and styling tools, as well as
                luxurious fragrances for both men and women.
              </p>
            </li>
            <li>
              <strong>Are your products cruelty-free?</strong>{" "}
              <p>
                Yes, we are committed to offering cruelty-free products. We
                carefully select brands that prioritize ethical practices and do
                not test on animals.
              </p>
            </li>
            <li>
              <strong>How do I place an order?</strong>
              <p>
                To place an order, simply browse our website, add your desired
                items to the shopping cart, and proceed to checkout. Follow the
                prompts to enter your shipping and payment information to
                complete your purchase.
              </p>
            </li>
            <li>
              <strong>What payment methods do you accept?</strong>
              <p>
                We accept various payment methods, including credit/debit cards,
                bitcoin, PayPal, and other secure online payment gateways. You
                can choose the option that is most convenient for you during
                checkout.
              </p>
            </li>
            <li>
              <strong>Do you offer international shipping?</strong>
              <p>
                Yes, we offer international shipping to select countries.
                Shipping rates and delivery times may vary depending on your
                location. Please refer to our shipping policy for more
                information.{" "}
              </p>
            </li>
            <li>
              <strong>What is your return policy?</strong>
              <p>
                We want you to be completely satisfied with your purchase. If
                you are not satisfied for any reason, you may return the item(s)
                within [3] days of receipt for a refund or exchange. Please
                review our return policy for detailed instructions and
                eligibility criteria.
              </p>
            </li>
            <li>
              <strong>How can I contact you?</strong>
              <p>
                If you have any questions, concerns, or inquiries, our customer
                support team is here to assist you. You can reach us via email
                at toyinnomons@gmail.com or through our contact info on the
                website. We strive to respond to all inquiries promptly.
              </p>
            </li>
            <li>
              <strong>Do you offer discounts or promotions?</strong>
              <p>
                {" "}
                Yes, we regularly offer discounts, promotions, and special
                offers to our customers. Be sure to sign up for our newsletter
                and follow us on social media to stay updated on the latest
                deals and exclusive offers.{" "}
              </p>
            </li>
            <li>
              <strong>Is my personal information secure? </strong>
              <p>
                Yes, we take the security and privacy of your personal
                information seriously. We employ industry-standard security
                measures to protect your data and ensure that it is handled in
                accordance with applicable privacy laws. For more information,
                please refer to our privacy policy.
              </p>
            </li>
          </ol>
        </p>
      </div>
    </div>
  );
};

export default page;
