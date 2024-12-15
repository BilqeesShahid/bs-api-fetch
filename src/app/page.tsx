import Image from "next/image";
import Products from "../components/Product";
import Title from "@/components/Title";

const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/phone");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default async function Home() {
  const products = await getData();

  
  return (
    <main>
      <Title title="Get Your Favorite Phone"/>
      <Products products={products} />
    </main>
  );
}
