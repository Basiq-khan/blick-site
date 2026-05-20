import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Check,
  Eye,
  EyeOff,
  ChevronRight,
  HelpCircle,
} from "lucide-react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [signInSuccess, setSignInSuccess] = useState(false);
  const [createSuccess, setCreateSuccess] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { email?: string; password?: string } = {};
    if (!email) newErrors.email = "Email address is required.";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Please enter a valid email address.";
    if (!password) newErrors.password = "Password is required.";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSignInSuccess(true);
      setTimeout(() => setSignInSuccess(false), 3000);
    }
  };

  const handleCreateAccount = () => {
    setCreateSuccess(true);
    setTimeout(() => setCreateSuccess(false), 3000);
  };

  return (
    <div className="animate-fade-in bg-white min-h-[70vh]">
      {/* Breadcrumb */}
      <div className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
            <Link to="/" className="hover:text-[#E31B23] transition-colors">Home</Link>
            <ChevronRight className="size-3" />
            <span className="text-zinc-800 font-semibold">Sign In</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">

          {/* ─── Left: Sign In ──────────────────────── */}
          <div>
            <h1 className="text-2xl font-bold text-zinc-900 mb-1.5">Sign In</h1>
            <p className="text-sm text-zinc-500 mb-8">
              Please enter your email address and your password to sign in.
              <br />
              Passwords are case sensitive.
            </p>

            <form onSubmit={handleSignIn} className="space-y-0">
              <div className="border border-zinc-300 rounded-md divide-y divide-zinc-300 bg-white">
                {/* Required note */}
                <div className="px-4 pt-4 pb-2">
                  <span className="text-xs text-zinc-400">* Indicates a required field.</span>
                </div>

                {/* Email field */}
                <div className="px-4 py-4">
                  <label htmlFor="signin-email" className="block text-sm font-semibold text-zinc-700 mb-2">
                    Email Address<span className="text-[#E31B23]">*</span>
                  </label>
                  <input
                    id="signin-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrors((prev) => ({ ...prev, email: undefined }));
                    }}
                    className={`w-full rounded border ${errors.email ? "border-red-400" : "border-zinc-300"} bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none focus:border-[#E31B23] focus:ring-1 focus:ring-[#E31B23]/30 transition-colors`}
                    placeholder=""
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1.5 font-medium">{errors.email}</p>
                  )}
                </div>

                {/* Password field */}
                <div className="px-4 py-4">
                  <label htmlFor="signin-password" className="block text-sm font-semibold text-zinc-700 mb-2">
                    Password<span className="text-[#E31B23]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="signin-password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setErrors((prev) => ({ ...prev, password: undefined }));
                      }}
                      className={`w-full rounded border ${errors.password ? "border-red-400" : "border-zinc-300"} bg-white px-3 py-2.5 pr-16 text-sm text-zinc-900 outline-none focus:border-[#E31B23] focus:ring-1 focus:ring-[#E31B23]/30 transition-colors`}
                      placeholder=""
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs font-bold text-zinc-500 hover:text-zinc-800 uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      {showPassword ? (
                        <><EyeOff className="size-3.5" /> HIDE</>
                      ) : (
                        <><Eye className="size-3.5" /> SHOW</>
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-xs text-red-500 mt-1.5 font-medium">{errors.password}</p>
                  )}
                </div>

                {/* Stay logged in */}
                <div className="px-4 py-4">
                  <label className="flex items-center gap-2.5 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={stayLoggedIn}
                      onChange={(e) => setStayLoggedIn(e.target.checked)}
                      className="size-4 rounded border-zinc-300 text-[#E31B23] focus:ring-[#E31B23]/30 accent-[#E31B23] cursor-pointer"
                    />
                    <span className="text-sm text-zinc-700 group-hover:text-zinc-900 transition-colors">
                      Stay logged in on this device
                    </span>
                    <HelpCircle className="size-3.5 text-zinc-400" />
                  </label>
                </div>
              </div>

              {/* Sign In Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className={`rounded px-10 py-3 text-sm font-bold text-white uppercase tracking-wider transition-all cursor-pointer ${
                    signInSuccess
                      ? "bg-emerald-500 hover:bg-emerald-600"
                      : "bg-[#E31B23] hover:bg-red-700 active:scale-[0.98]"
                  }`}
                >
                  {signInSuccess ? (
                    <span className="flex items-center gap-2">
                      <Check className="size-4" /> Signed In!
                    </span>
                  ) : (
                    "Sign In"
                  )}
                </button>
              </div>

              {/* Forgot password */}
              <div className="mt-5">
                <a
                  href="#"
                  className="text-sm font-bold text-zinc-800 uppercase tracking-wide hover:text-[#E31B23] transition-colors underline decoration-1 underline-offset-2"
                >
                  Forgot Password
                </a>
              </div>
            </form>
          </div>

          {/* ─── Right: Create Account ──────────────── */}
          <div className="md:border-l md:border-zinc-200 md:pl-16">
            <h2 className="text-2xl font-bold text-zinc-900 mb-1.5">Create Account</h2>
            <p className="text-sm text-zinc-500 mb-6">
              Becoming a registered Blick customer is a great way to
            </p>

            <ul className="space-y-3.5 mb-8">
              {["Save Time", "Track Orders", "View Past Orders", "Create & Share Lists"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex items-center justify-center size-5 rounded-full bg-[#E31B23]/10">
                    <Check className="size-3.5 text-[#E31B23]" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-bold text-zinc-800">{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={handleCreateAccount}
              className={`rounded border-2 px-8 py-3 text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                createSuccess
                  ? "border-emerald-500 bg-emerald-500 text-white"
                  : "border-[#E31B23] bg-[#E31B23] text-white hover:bg-red-700 hover:border-red-700 active:scale-[0.98]"
              }`}
            >
              {createSuccess ? (
                <span className="flex items-center gap-2">
                  <Check className="size-4" /> Account Created!
                </span>
              ) : (
                "Create Account"
              )}
            </button>

            <p className="text-xs text-zinc-400 mt-8 leading-relaxed">
              All information, including your privacy settings,
              can be changed or updated whenever you sign in.
            </p>
          </div>
        </div>

        {/* ─── Privacy Disclosure ────────────────── */}
        <div className="mt-12 border-t border-zinc-200 pt-8">
          <p className="text-[11px] text-zinc-400 leading-relaxed max-w-4xl">
            When you create or use an online account, we collect information that allows us to identify you such as your name and contact information. We will also collect certain commercial information necessary to complete any purchase. For store pickup orders, we will also collect certain commercial information, including credit or debit card number, for purposes of completing the sale. We collect and use your Personal Information pursuant to our{" "}
            <Link to="/pages/privacy-policy" className="text-zinc-600 underline hover:text-[#E31B23]">Privacy Policy</Link>. Your purchases will also be subject to our{" "}
            <Link to="/pages/return-policy" className="text-zinc-600 underline hover:text-[#E31B23]">Return Policy</Link>. If you have any questions about our privacy practices, contact us at{" "}
            <a href="mailto:privacy@dickblick.com" className="text-zinc-600 underline hover:text-[#E31B23]">privacy@dickblick.com</a>.
          </p>
          <p className="text-[11px] text-zinc-400 leading-relaxed max-w-4xl mt-3">
            Blick does not sell or exchange email addresses but does occasionally send emails offering classes and content offered by third parties.
          </p>
          <p className="text-[11px] text-zinc-400 leading-relaxed max-w-4xl mt-3">
            <strong className="text-zinc-500">FOR CALIFORNIA RESIDENTS ONLY</strong> If you are a California resident, you have certain rights under the California Consumer Privacy Act. For more information see your{" "}
            <Link to="/pages/privacy-policy" className="text-zinc-600 underline hover:text-[#E31B23]">California Privacy Rights</Link> and our{" "}
            <span className="text-zinc-600 underline cursor-pointer hover:text-[#E31B23]">Do Not Sell/Share My Personal Information</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
