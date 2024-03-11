import React from "react";

const page = () => {
  return (
    <div className="text-primeColor bg-white px-8 py-4 items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="font-medium mb-4">
        Welcome to <strong>Toyinno BeautyHub!</strong> These Terms and
        Conditions govern your use of our website and services. By accessing or
        using our website, you agree to comply with these terms. Please read
        them carefully.
        <h2 className="font-bold text-xl mb-2"> Acceptance of Terms </h2>
        <p>
          By using our website, you agree to abide by these Terms and Conditions
          and any additional terms and conditions that may apply to specific
          sections of the website.
        </p>
        <div className="mb-4">
          <ol>
            <li>
              <p>
                <strong className="text-lg">Use of Services: </strong> Our
                website offers information and services related to skincare,
                hair products, and fragrances. You may browse our website and
                purchase products subject to these terms. Product Information:
                While we strive to provide accurate product descriptions and
                information, we do not guarantee the accuracy, completeness, or
                reliability of any content on our website. Product images are
                for illustrative purposes only and may differ from the actual
                products.
              </p>
            </li>
            <li>
              <p>
                {" "}
                <strong className="text-lg">Purchases: </strong>
                When you make a purchase through Toyinno BeautyHub, you agree to
                provide accurate and complete information. We reserve the right
                to refuse or cancel any order for any reason, including but not
                limited to product availability, errors in pricing, or suspicion
                of fraudulent activity.{" "}
              </p>
            </li>
            <li>
              <p>
                <strong className="text-lg">Intellectual Property: </strong>All
                content on Toyinno BeautyHub, including text, graphics, logos,
                images, and software, is the property of Toyinno BeautyHub or
                its licensors and is protected by intellectual property laws.
                You may not use, reproduce, distribute, or modify any content
                without our prior written consent.
              </p>
            </li>
            <li>
              <p>
                <strong className="text-lg">Privacy Policy: </strong> Your
                privacy is important to us. Please review our Privacy Policy to
                understand how we collect, use, and disclose your personal
                information.
              </p>
            </li>
            <li>
              <p>
                <strong className="text-lg">Changes to Terms: </strong>Toyinno
                BeautyHub reserves the right to modify or replace these Terms
                and Conditions at any time. We will notify you of any changes by
                posting the new terms on our website.{" "}
              </p>
            </li>
            <p>
              <em>
                By using our website, you agree to these Terms and Conditions.
                If you do not agree with any part of these terms, you should not
                use our website. If you have any questions about these terms,
                please contact us.
              </em>
            </p>
          </ol>
        </div>
      </p>
    </div>
  );
};

export default page;
