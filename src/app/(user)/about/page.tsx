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
        className="object-fill relative"
      />

      <h1 className="mb-4 absolute bottom-20 items-center left-60 text-5xl font-bold text-center text-green-800  justify-between px-60">
        <em> About Us</em>
      </h1>
      <div className=" text-primeColor bg-white px-8 py-4 justify-center ">
        <p className="mb-4">
          Welcome to Toyinno BeautyHub, where the essence of beauty is
          celebrated in every aspect of your skin, hair, and fragrance
          experience. We believe that beauty is a personal journey, and we are
          here to empower and inspire you on that voyage.
          <p className="mb-4">
            At Toyinno BeautyHub, we curate a unique blend of skincare,
            haircare, and fragrance products that cater to the diverse needs and
            desires of our community. Our mission is to redefine beauty
            standards by promoting self-expression and individuality.
          </p>
          <h2 className="font-bold text-xl mb-2">Our Philosophy</h2>
          <p className="mb-4">
            Beauty is more than skin deep — It is a celebration of your unique
            identity. We embrace the idea that every person is beautiful in
            their own way. Our curated selection of products is designed to
            enhance your natural beauty and boost your confidence.
          </p>
          <h2 className="font-bold text-xl mb-2">Our Vision</h2>
          <p className="mb-4">
            At Toyinno BeautyHub, we envision a world where beauty is not just
            skin deep but a celebration of individuality. We believe that
            everyone deserves access to high-quality beauty products that
            enhance their natural beauty while embracing the joy of
            self-expression.
          </p>
          <h2 className="font-bold text-xl mb-2">Skincare</h2>
          <p className="mb-4">
            Indulge in our skincare collection designed to pamper your skin. We
            carefully select skincare products that prioritize quality,
            innovation, and effectiveness. From rejuvenating serums to
            nourishing moisturizers, our collection is a testament to our
            commitment to the health and radiance of your skin.
          </p>
          <h2 className="font-bold text-xl mb-2">Haircare </h2>
          <p className="mb-4">
            Transform your tresses with our exclusive range of haircare
            essentials. Whether you are looking for products to enhance curls,
            add volume, or achieve sleek styles, Toyinno BeautyHub has you
            covered. We believe that every strand tells a story, and we want to
            help you express yours.
          </p>
          <h2 className="font-bold text-xl mb-2">Fragrance Oasis</h2>
          <p className="mb-4">
            Embark on a sensory journey with our exquisite fragrance collection.
            From light and floral to bold and mysterious, our scents are crafted
            to evoke emotions and create lasting impressions. Discover
            fragrances that resonate with your personality and leave a lasting
            memory.
          </p>
          <h2 className="font-bold text-xl mb-2">Our Commitment to Quality</h2>
          <p className="mb-4">
            Quality is the heartbeat of Toyinno BeautyHub. We are committed to
            sourcing and curating a selection of products that adhere to the
            highest standards. From nourishing skincare solutions to luxurious
            haircare and captivating fragrances, each product in our collection
            is carefully chosen to cater to diverse beauty needs.
          </p>
          <p>
            <em>Toyinno BeautyHub - Where Beauty Knows No Bounds.</em>
          </p>
        </p>
      </div>
    </div>
  );
};

export default page;
