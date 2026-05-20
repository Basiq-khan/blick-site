import { useState } from "react";
import { ShoppingCart, HelpCircle, Check, CreditCard } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);
  
  // Form State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [apt, setApt] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");
  
  // Shipping Method State
  const [shippingMethod, setShippingMethod] = useState<"standard" | "express">("standard");

  // Payment State
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  
  const shippingThreshold = 79;
  const shippingCost = subtotal >= shippingThreshold || shippingMethod === "standard" && subtotal >= 79 ? 0 : (shippingMethod === "express" ? 19.95 : 7.95);
  const tax = subtotal * 0.08; // Simulated 8% sales tax
  const total = subtotal + shippingCost + tax;

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeStep === 1) {
      if (!firstName || !lastName || !streetAddress || !city || !state || !zipCode || !phone) {
        alert("Please fill in all required shipping fields marked with an asterisk (*)");
        return;
      }
      setActiveStep(2);
    } else if (activeStep === 2) {
      setActiveStep(3);
    }
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cardName || !cardNumber || !cardExpiry || !cardCvv) {
      alert("Please enter all card details to complete payment.");
      return;
    }
    // Complete Checkout
    clearCart();
    alert("Thank you for your order!");
    navigate("/");
  };

  return (
    <div className="bg-zinc-50 min-h-screen">
      
      {/* Checkout Minimal Header */}
      <header className="bg-white border-b border-zinc-200 py-4 px-6 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => navigate("/")}
            className="text-black font-black text-2xl tracking-tighter uppercase focus:outline-none hover:text-[#E31B23] transition-colors"
          >
            BLICK
          </button>
          
          <h1 className="text-zinc-800 font-bold text-base md:text-lg tracking-wide">
            Checkout
          </h1>
          
          <button 
            onClick={() => navigate("/cart")}
            className="text-zinc-800 hover:text-[#E31B23] transition-colors"
            aria-label="View Cart"
          >
            <ShoppingCart className="size-6" />
          </button>
        </div>
      </header>

      {/* Main Checkout Funnel */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Checkout Stages (8 Columns) */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* Step 1: Shipping Address */}
            <div className="bg-white rounded-lg border border-zinc-200 shadow-xs overflow-hidden">
              <button 
                onClick={() => activeStep > 1 && setActiveStep(1)}
                className={`w-full px-6 py-4.5 flex items-center justify-between text-left focus:outline-none ${
                  activeStep === 1 
                    ? "bg-white text-[#E31B23]" 
                    : "bg-zinc-50 text-zinc-800 border-b border-zinc-150"
                }`}
              >
                <h2 className="text-base sm:text-lg font-bold tracking-tight uppercase">
                  1. Shipping Address
                </h2>
                {activeStep > 1 && <Check className="size-5 text-emerald-600" />}
              </button>

              {activeStep === 1 && (
                <form onSubmit={handleNextStep} className="p-6 space-y-5">
                  <div className="text-right text-[10px] text-zinc-400 font-semibold italic">
                    * Required field
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-zinc-650 uppercase tracking-wide block">First Name*</label>
                      <input 
                        type="text" 
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full rounded-md border border-zinc-300 px-3 py-2 text-xs text-zinc-800 bg-zinc-50/50 focus:bg-white focus:border-black outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-zinc-650 uppercase tracking-wide block">Last Name*</label>
                      <input 
                        type="text" 
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full rounded-md border border-zinc-300 px-3 py-2 text-xs text-zinc-800 bg-zinc-50/50 focus:bg-white focus:border-black outline-none transition-all"
                      />
                    </div>
                  </div>

                  <button type="button" className="text-[10px] font-bold text-zinc-800 hover:text-[#E31B23] underline uppercase tracking-wider block">
                    NEED TO ADD A COMPANY OR BUSINESS NAME?
                  </button>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-zinc-650 uppercase tracking-wide block">Street Address*</label>
                    <input 
                      type="text" 
                      required
                      value={streetAddress}
                      onChange={(e) => setStreetAddress(e.target.value)}
                      placeholder="Street address, P.O. Box, company name, c/o"
                      className="w-full rounded-md border border-zinc-300 px-3 py-2 text-xs text-zinc-800 bg-zinc-50/50 focus:bg-white focus:border-black outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                    <div className="sm:col-span-2 space-y-1">
                      <button type="button" className="text-[10px] font-bold text-zinc-800 hover:text-[#E31B23] underline uppercase tracking-wider">
                        SHIPPING TO A P.O. BOX?
                      </button>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-zinc-650 uppercase tracking-wide block">Apt (Opt.)</label>
                      <input 
                        type="text" 
                        value={apt}
                        onChange={(e) => setApt(e.target.value)}
                        placeholder="Apartment, suite, unit, building, floor, etc."
                        className="w-full rounded-md border border-zinc-300 px-3 py-2 text-xs text-zinc-800 bg-zinc-50/50 focus:bg-white focus:border-black outline-none transition-all"
                      />
                    </div>
                  </div>

                  <button type="button" className="text-[10px] font-bold text-zinc-800 hover:text-[#E31B23] underline uppercase tracking-wider block">
                    ADD ADDRESS LINE
                  </button>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-zinc-650 uppercase tracking-wide block">City*</label>
                      <input 
                        type="text" 
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full rounded-md border border-zinc-300 px-3 py-2 text-xs text-zinc-800 bg-zinc-50/50 focus:bg-white focus:border-black outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-zinc-650 uppercase tracking-wide block">State*</label>
                      <select 
                        required
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="w-full rounded-md border border-zinc-300 px-3 py-2 text-xs text-zinc-800 bg-zinc-50/50 focus:bg-white focus:border-black outline-none transition-all"
                      >
                        <option value="">SELECT A STATE...</option>
                        <option value="IL">Illinois</option>
                        <option value="CA">California</option>
                        <option value="NY">New York</option>
                        <option value="TX">Texas</option>
                        <option value="FL">Florida</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-zinc-650 uppercase tracking-wide block">Zip Code*</label>
                      <input 
                        type="text" 
                        required
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        className="w-full rounded-md border border-zinc-300 px-3 py-2 text-xs text-zinc-800 bg-zinc-50/50 focus:bg-white focus:border-black outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-zinc-650 uppercase tracking-wide block">Phone Number*</label>
                    <input 
                      type="tel" 
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 555-555-5555"
                      className="w-full rounded-md border border-zinc-300 px-3 py-2 text-xs text-zinc-800 bg-zinc-50/50 focus:bg-white focus:border-black outline-none transition-all"
                    />
                  </div>

                  <button type="button" className="text-[10px] font-bold text-zinc-800 hover:text-[#E31B23] underline uppercase tracking-wider block">
                    SHIP OUTSIDE U.S.
                  </button>

                  <div className="pt-4 flex justify-center">
                    <button 
                      type="submit"
                      className="bg-[#E31B23] hover:bg-black text-white font-bold text-xs uppercase px-16 py-3.5 rounded-md shadow-md transition-colors tracking-widest cursor-pointer"
                    >
                      Next
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Step 2: Shipping Methods */}
            <div className="bg-white rounded-lg border border-zinc-200 shadow-xs overflow-hidden">
              <button 
                onClick={() => activeStep > 2 && setActiveStep(2)}
                disabled={activeStep < 2}
                className={`w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none ${
                  activeStep === 2 
                    ? "bg-white text-[#E31B23]" 
                    : "bg-zinc-50 text-zinc-400 border-b border-zinc-150"
                }`}
              >
                <h2 className="text-base sm:text-lg font-bold tracking-tight uppercase">
                  2. Shipping Methods
                </h2>
                {activeStep > 2 && <Check className="size-5 text-emerald-600" />}
              </button>

              {activeStep === 2 && (
                <form onSubmit={handleNextStep} className="p-6 space-y-6">
                  <div className="space-y-3">
                    <label className="flex items-start gap-3 p-4 rounded-xl border border-zinc-250 bg-zinc-50/40 hover:bg-white cursor-pointer transition-all">
                      <input 
                        type="radio" 
                        name="shipping" 
                        checked={shippingMethod === "standard"}
                        onChange={() => setShippingMethod("standard")}
                        className="mt-0.5 accent-[#E31B23]" 
                      />
                      <div className="text-xs space-y-1">
                        <span className="font-extrabold text-zinc-900 uppercase tracking-wide block">Standard Delivery</span>
                        <span className="text-zinc-500 font-semibold block">Ships via UPS Ground / USPS. Arrives in 3-5 business days.</span>
                        <span className="text-emerald-600 font-bold block">{subtotal >= 79 ? "FREE (Orders over $79)" : "$7.95"}</span>
                      </div>
                    </label>

                    <label className="flex items-start gap-3 p-4 rounded-xl border border-zinc-250 bg-zinc-50/40 hover:bg-white cursor-pointer transition-all">
                      <input 
                        type="radio" 
                        name="shipping" 
                        checked={shippingMethod === "express"}
                        onChange={() => setShippingMethod("express")}
                        className="mt-0.5 accent-[#E31B23]" 
                      />
                      <div className="text-xs space-y-1">
                        <span className="font-extrabold text-zinc-900 uppercase tracking-wide block">Express Delivery</span>
                        <span className="text-zinc-500 font-semibold block">Ships via UPS Next Day / 2-Day Air. Arrives in 1-2 business days.</span>
                        <span className="text-[#E31B23] font-bold block">$19.95</span>
                      </div>
                    </label>
                  </div>

                  <div className="pt-4 flex justify-center">
                    <button 
                      type="submit"
                      className="bg-[#E31B23] hover:bg-black text-white font-bold text-xs uppercase px-16 py-3.5 rounded-md shadow-md transition-colors tracking-widest cursor-pointer"
                    >
                      Next
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Step 3: Payment */}
            <div className="bg-white rounded-lg border border-zinc-200 shadow-xs overflow-hidden">
              <button 
                disabled={activeStep < 3}
                className={`w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none ${
                  activeStep === 3 
                    ? "bg-white text-[#E31B23]" 
                    : "bg-zinc-50 text-zinc-400 border-b border-zinc-150"
                }`}
              >
                <h2 className="text-base sm:text-lg font-bold tracking-tight uppercase">
                  3. Payment
                </h2>
              </button>

              {activeStep === 3 && (
                <form onSubmit={handlePlaceOrder} className="p-6 space-y-6">
                  
                  {/* Credit Card Details */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 border-b border-zinc-150 pb-2">
                      <CreditCard className="size-5 text-[#E31B23]" />
                      <span className="text-xs font-black text-zinc-800 uppercase tracking-wide">Credit Card Payment</span>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-zinc-650 uppercase tracking-wide block">Name on Card*</label>
                      <input 
                        type="text" 
                        required
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        className="w-full rounded-md border border-zinc-300 px-3 py-2 text-xs text-zinc-800 bg-zinc-50/50 focus:bg-white focus:border-black outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-zinc-650 uppercase tracking-wide block">Card Number*</label>
                      <input 
                        type="text" 
                        required
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="•••• •••• •••• ••••"
                        className="w-full rounded-md border border-zinc-300 px-3 py-2 text-xs text-zinc-800 bg-zinc-50/50 focus:bg-white focus:border-black outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-zinc-650 uppercase tracking-wide block">Expiration Date*</label>
                        <input 
                          type="text" 
                          required
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          placeholder="MM/YY"
                          className="w-full rounded-md border border-zinc-300 px-3 py-2 text-xs text-zinc-800 bg-zinc-50/50 focus:bg-white focus:border-black outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-zinc-650 uppercase tracking-wide block">CVV / Security Code*</label>
                        <input 
                          type="password" 
                          required
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value)}
                          maxLength={4}
                          placeholder="•••"
                          className="w-full rounded-md border border-zinc-300 px-3 py-2 text-xs text-zinc-800 bg-zinc-50/50 focus:bg-white focus:border-black outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit checkout order */}
                  <div className="pt-4 flex flex-col items-center gap-3">
                    <button 
                      type="submit"
                      className="bg-[#E31B23] hover:bg-black text-white font-bold text-xs uppercase px-16 py-3.5 rounded-md shadow-md transition-colors tracking-widest cursor-pointer"
                    >
                      Place Order
                    </button>
                    <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                      By clicking Place Order, you authorize Dick Blick Holdings Inc. to charge your card.
                    </span>
                  </div>
                </form>
              )}
            </div>

          </div>

          {/* RIGHT COLUMN: Sidebar (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Order Summary */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-xs space-y-5">
              <h3 className="text-zinc-900 font-bold text-base tracking-wide border-b border-zinc-150 pb-3">
                Order Summary
              </h3>

              <div className="space-y-3 text-xs text-zinc-600">
                <div className="flex justify-between items-center">
                  <span>Subtotal:</span>
                  <span className="font-bold text-zinc-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Shipping:</span>
                  <span className="font-bold text-zinc-900">
                    {shippingMethod === "express" ? "$19.95" : (subtotal >= 79 ? "FREE" : "$7.95")}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Tax:</span>
                  <span className="font-bold text-zinc-900">${tax.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between items-center pt-3 border-t border-zinc-150 text-sm font-black text-zinc-900">
                  <span>Total:</span>
                  <span className="text-[#E31B23]">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Free shipping terms matching the screenshot */}
              <div className="bg-zinc-50 border border-zinc-200 p-3 rounded-lg text-center flex items-center justify-center gap-1.5">
                <span className="text-[#E31B23] font-bold text-[11px] uppercase tracking-wide">
                  Free Shipping on Orders of $79 or More
                </span>
                <HelpCircle className="size-3.5 text-zinc-400 inline cursor-pointer" />
              </div>

              {/* Products in Checkout */}
              <div className="border-t border-zinc-150 pt-4 space-y-4">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">Items ({totalItemsCount})</span>
                {cart.map((item, idx) => (
                  <div key={`${item.product.id}-${item.selectedOption || idx}`} className="flex gap-3.5 items-center">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name} 
                      className="size-11 rounded object-cover border border-zinc-200 shrink-0" 
                    />
                    <div className="flex-1 text-xs space-y-0.5">
                      <h4 className="font-bold text-zinc-900 line-clamp-1">{item.product.name}</h4>
                      <p className="text-[10px] text-zinc-500 font-semibold">Qty: {item.quantity}</p>
                    </div>
                    <span className="text-xs font-bold text-zinc-800 shrink-0">${(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Can We Help? */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-xs text-center space-y-3">
              <h4 className="text-zinc-850 font-bold text-sm tracking-wide">
                Can We Help?
              </h4>
              <a href="tel:18008284548" className="text-lg font-black text-zinc-950 hover:text-[#E31B23] transition-colors block">
                1-800-828-4548
              </a>
            </div>

          </div>
        </div>
      </main>

      {/* Checkout Minimal Footer */}
      <footer className="bg-[#2a2b2e] text-zinc-400 text-[11px] py-12 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto space-y-8 flex flex-col items-center">
          
          {/* Trust Seal Logo */}
          <div className="flex items-center gap-2 bg-[#202123] border border-zinc-700 px-4 py-2 rounded shadow-sm text-white font-bold text-xs uppercase tracking-wide cursor-pointer hover:border-zinc-500 transition-all select-none">
            <span className="text-zinc-400 font-medium">VikingCloud™</span>
            <span className="text-emerald-400">Trusted</span>
            <span className="text-zinc-200">Commerce</span>
          </div>

          <div className="text-center space-y-2 font-semibold">
            <p>DICK BLICK ART MATERIALS - P.O. BOX 1267 GALESBURG, IL 61402-1267</p>
            <p>
              TOLL FREE PHONE (800) 828-4548 | INTERNATIONAL PHONE +1-309-343-6181 EXT. 5402 | FAX (800) 621-8293
            </p>
          </div>

          {/* circular Accessibility Seal */}
          <div className="flex flex-col items-center gap-1.5">
            <div className="size-14 rounded-full bg-white text-zinc-900 border-4 border-zinc-800 flex flex-col items-center justify-center font-black leading-none text-[8px] text-center shadow-md select-none">
              <span className="text-[#E31B23] text-[9px]">allyant</span>
              <span className="text-[6px] text-zinc-500 font-bold mt-0.5">ACCESSIBILITY</span>
            </div>
            <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Reviewed for accessibility</span>
          </div>

          <p className="text-[10px] text-zinc-500 text-center max-w-2xl font-medium border-t border-zinc-800 pt-6">
            Dick Blick Art Materials®, Blick®, Blick Studio®, And Artists Pick Blick® Are Registered Trademarks Of Dick Blick Holdings Inc. © Copyright 1999- 2026 Dick Blick Holdings Inc. All Rights Reserved.
          </p>

        </div>
      </footer>

    </div>
  );
}
