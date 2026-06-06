document.addEventListener("DOMContentLoaded", () => {

  const metaData = {

    /* ======================
       CORE
    ====================== */

    "index": {
      title: "Home | Rotai Wellness",
      description: "India’s best wellness & massage solutions by Rotai Wellness.",
      keywords: "massage chair, wellness, Rotai"
    },

    "about-us": {
      title: "About Us | Rotai Wellness",
      description: "Learn about Rotai Wellness, our mission and wellness journey.",
      keywords: "about Rotai, wellness company"
    },

    "contact-us": {
      title: "Contact Us | Rotai Wellness",
      description: "Get in touch with Rotai Wellness for support and inquiries.",
      keywords: "contact Rotai, customer support"
    },

    "faq": {
      title: "FAQs | Rotai Wellness",
      description: "Frequently asked questions about Rotai Wellness products and services.",
      keywords: "faq, Rotai support"
    },

    "media": {
      title: "Media | Rotai Wellness",
      description: "Media coverage, press releases and brand updates from Rotai Wellness.",
      keywords: "Rotai media, press release"
    },

    /* ======================
       BLOG
    ====================== */

    "blogs": {
      title: "Blogs | Rotai Wellness",
      description: "Read wellness tips, massage benefits and lifestyle blogs.",
      keywords: "wellness blogs, massage tips"
    },

    "blog-detail": {
      title: "Wellness Blog | Rotai Wellness",
      description: "Detailed wellness insights and health articles by Rotai Wellness.",
      keywords: "wellness blog, health tips"
    },

    /* ======================
       SHOP / PRODUCTS
    ====================== */

    "shop": {
      title: "Shop Wellness Products | Rotai Wellness",
      description: "Buy premium massage chairs and wellness products online.",
      keywords: "massage chair shop, wellness products"
    },

    "r-aurex": {
      title: "R-Aurex Massage Chair | Rotai Wellness",
      description: "Discover features and benefits of R-Aurex massage chair.",
      keywords: "r aurex massage chair"
    },

    "r-relx": {
      title: "R-Relx Massage Chair | Rotai Wellness",
      description: "Experience comfort and relaxation with R-Relx massage chair.",
      keywords: "r relx massage chair"
    },

    "r-velor": {
      title: "R-Valor Massage Chair | Rotai Wellness",
      description: "Advanced massage technology with R-Valor chair.",
      keywords: "r valor massage chair"
    },

    "r-zenora": {
      title: "R-Zenora Massage Chair | Rotai Wellness",
      description: "Premium wellness experience with R-Zenora massage chair.",
      keywords: "r zenora massage chair"
    },

    /* ======================
       CART & ORDER
    ====================== */

    "cart": {
      title: "Cart | Rotai Wellness",
      description: "Review products added to your cart.",
      keywords: "shopping cart"
    },

    "checkout": {
      title: "Checkout | Rotai Wellness",
      description: "Secure checkout for your wellness products.",
      keywords: "secure checkout"
    },

    "bookings": {
      title: "Bookings | Rotai Wellness",
      description: "View and manage your service bookings.",
      keywords: "massage booking"
    },

    "thankyou": {
      title: "Thank You | Rotai Wellness",
      description: "Your order has been placed successfully.",
      keywords: "order confirmation"
    },

    "rotai-order-invoice": {
      title: "Invoice | Rotai Wellness",
      description: "Download your Rotai Wellness order invoice.",
      keywords: "order invoice"
    },

    /* ======================
       USER ACCOUNT
    ====================== */

    "login": {
      title: "Login | Rotai Wellness",
      description: "Login to your Rotai Wellness account.",
      keywords: "login Rotai"
    },

    "register": {
      title: "Register | Rotai Wellness",
      description: "Create your Rotai Wellness account.",
      keywords: "register account"
    },

    "forgot-password": {
      title: "Forgot Password | Rotai Wellness",
      description: "Reset your Rotai Wellness account password.",
      keywords: "forgot password"
    },

    "my-account": {
      title: "My Account | Rotai Wellness",
      description: "Manage your account, orders and profile.",
      keywords: "my account"
    },

    "wishlist": {
      title: "Wishlist | Rotai Wellness",
      description: "Your saved wellness products.",
      keywords: "wishlist products"
    },

    /* ======================
       POLICIES
    ====================== */

    "privacy-policy": {
      title: "Privacy Policy | Rotai Wellness",
      description: "Read Rotai Wellness privacy policy.",
      keywords: "privacy policy"
    },

    "terms-of-use": {
      title: "Terms of Use | Rotai Wellness",
      description: "Terms and conditions of Rotai Wellness website.",
      keywords: "terms of use"
    },

    "refund-policy": {
      title: "Refund Policy | Rotai Wellness",
      description: "Refund and cancellation policy details.",
      keywords: "refund policy"
    },

    "return-policy": {
      title: "Return Policy | Rotai Wellness",
      description: "Product return policy information.",
      keywords: "return policy"
    },

    "shipping-policy": {
      title: "Shipping Policy | Rotai Wellness",
      description: "Shipping and delivery information.",
      keywords: "shipping policy"
    },

    "warranty": {
      title: "Warranty | Rotai Wellness",
      description: "Warranty information for Rotai Wellness products.",
      keywords: "product warranty"
    },

    /* ======================
       EXTRA
    ====================== */

    "coming-soon": {
      title: "Coming Soon | Rotai Wellness",
      description: "This page will be available soon.",
      keywords: "coming soon"
    }

  };

  const pageName = window.location.pathname
    .split("/")
    .pop()
    .replace(".html", "");

  if (!metaData[pageName]) return;

  document.title = metaData[pageName].title;
  document.querySelector('meta[name="description"]').content = metaData[pageName].description;
  document.querySelector('meta[name="keywords"]').content = metaData[pageName].keywords;

});
