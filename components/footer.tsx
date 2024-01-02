import { Truck, Calendar, CreditCard, Percent } from "lucide-react";
import Link from "next/link";
import { Separator } from "./ui/separator";
import Button from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <div className="bg-black text-white p-5">
      <div className="grid grid-cols-4">
        <div className="flex items-center">
          <Truck size={20} color="white" />
          <p className="text-xs p-2">FREE SHIPPING</p>
        </div>
        <div className="flex items-center">
          <Calendar size={20} color="white" />
          <p className="text-xs p-2">15-DAY RETURN POLICY AND FULL REFUND</p>
        </div>
        <div className="flex items-center">
          <CreditCard size={20} color="white" />
          <p className="text-xs p-2">SAFEST PAYMENT METHOD</p>
        </div>
        <div className="flex items-center">
          <Percent size={20} color="white" />
          <p className="text-xs p-2">
            AMAZING OFFERS ON ALL ORDERS ABOVE 1500/-
          </p>
        </div>
      </div>
      <Separator className="my-6" />
      <div className="grid grid-cols-3">
        <div className="space-y-2">
          <p>CONTACT INFO:</p>
          <p className="text-xs">Email: support@meninformals.com</p>
          <p className="text-xs">Phone: 6303410719</p>
        </div>
        <div className="space-y-2">
          <p>QUICK LINKS</p>
          <div className="text-xs grid grid-cols space-y-2 w-full">
            <Link className="w-auto hover:text-orange-900" href="/">
              Return and Refund Policy
            </Link>
            <Link className="hover:text-orange-900" href="/">
              Shipping Policy
            </Link>
            <Link className="hover:text-orange-900" href="/">
              Privacy Policy
            </Link>
            <Link className="hover:text-orange-900" href="/">
              Terms of Service
            </Link>
            <Link className="hover:text-orange-900" href="/">
              About us
            </Link>
            <Link className="hover:text-orange-900" href="/">
              Return and Refund Policy
            </Link>
            <Link className="hover:text-orange-900" href="/">
              Men In Formal: Fashion Blog
            </Link>
          </div>
        </div>
        <div className="grid grid-rows space-y-2 justify-between">
          <p>SUBSCRIBE TO NEWSLETTER</p>
          <p>Email:</p>
          <Input className="w-60 h-7 bg-black" />
          <div className="">
            <Button className="bg-white text-black">Sign Up</Button>
          </div>
        </div>
      </div>
      <Separator className="my-7" />
      <footer className="flex items-start text-center text-xs">
        <div className="flex-grow">
          © 2023 MEN IN FORMALS. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
