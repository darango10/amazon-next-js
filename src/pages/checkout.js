import React from "react";
import { Header } from "../components/Header";
import Head from "next/head";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";

const Checkout = () => {
  const items = useSelector(selectItems);

  console.log(items);

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Checkout</title>
      </Head>
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Amazon Basket is Empty"
                : "Shopping Basket"}
            </h1>

            {items.map((item, i) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              description={item.description}
              category={item.category}
              image={item.image}
              hasPrime={item.hasPrime}
              key={i}
            />
          ))}
          </div>
        </div>
        <div>
        Right
        </div>
      </main>
    </div>
  );
};

export default Checkout;
