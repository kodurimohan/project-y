"use client";
import { Search, Shirt, ShoppingBag, User } from "lucide-react";
import Button from "./ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useCart from "@/hooks/use-cart";

const TempNavbar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <nav className="bg-black p-4 text-white flex justify-between items-center fixed w-full top-0 z-50">
      {/* Left Section */}
      <div className="flex items-center w-40">
        <div className="mr-4">
          <Button className="flex items-center ghost bg-transparent px-4 py-2">
            <Search size={20} color="white" />
          </Button>
        </div>
      </div>

      {/* Center Section */}
      <div className="mx-auto">
        <Link href="/">
          <p className="text-white text-3xl font-bold">MEN IN FORMALS</p>
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center w-40">
        <div className="ml-4 flex flex-cols space-x-1">
          <Button
            onClick={() => router.push("/trailroom")}
            className="bg-transparent flex items-center px-4 py-2"
          >
            <Shirt size={20} color="white" />
          </Button>
          <Button
            onClick={() => router.push("/cart")}
            className="bg-transparent flex items-center px-4 py-2"
          >
            <ShoppingBag size={20} color="white" />
            <span className="ml-2 text-sm font-medium text-white">
              {cart.items.length}
            </span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default TempNavbar;
