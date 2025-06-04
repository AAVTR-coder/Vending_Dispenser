import React from 'react';
import axios from 'axios';
import './Home.css'; // optional CSS
import Card from './Card';



const Home = () => {
  const checkoutHandler = async (amount) => {
    try {
      // Step 1: Get Razorpay API Key
      const { data: { key } } = await axios.get("http://localhost:4000/api/getkey");

      // Step 2: Create order on the backend
      const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
        amount
      });

      // Step 3: Define Razorpay options
      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "Perfumesssss",
        description: "RazorPay Prototype",
        image: "https://imgs.search.brave.com/yhyijXYAmxwmSqfXPteF_iAl8dUCoAJ1nasTlTDIsyg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yMy80Ny9w/ZXJmdW1lLXNob3At/bG9nby10ZW1wbGF0/ZS1iZWF1dHktYnVz/aW5lc3MtdmVjdG9y/LTQwMzQyMzQ3Lmpw/Zw",
        order_id: order.id,
        callback_url: "http://localhost:4000/api/paymentverification",
        prefill: {
          name: "ABC XYZ",
          email: "abc.xyz@example.com",
          contact: "9999999999"
        },
        notes: {
          address: "Razorpay Corporate Office"
        },
        theme: {
          color: "#121212"
        }

      };

      if (!window.Razorpay) {
        alert("Razorpay SDK not loaded. Please refresh.");
        return;
      }

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Error in checkout:", error);
      alert("Payment failed. Please try again later.");
    }
  };

  return (
    <div className="home-container">
      <Card
        amount={5000}
        img="https://imgs.search.brave.com/zt-7_evqauDUMKejvEmoCfPhbCb-6RXkYFwZG0un8uE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ0/MzE4Nzc2L3Bob3Rv/L3RyYW5zcGFyZW50/LXBlcmZ1bWUtYm90/dGxlLWlzb2xhdGVk/LW9uLXdoaXRlLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1u/NGV5bDZ4VFJYWlFf/NXc0RFBXVWEzVXA4/dGhlVE5nOFlRZkRE/QmJrb2hNPQ"
        checkoutHandler={checkoutHandler}
      />
      <Card
        amount={3000}
     img="https://imgs.search.brave.com/SGmkzSwr9gzBk8r82QSMJvIiJZ3MPYEQe2fUmEbcMF4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDgv/MjExLzgzMC9zbWFs/bC9wZXJmdW1lLWJv/dHRsZS13aXRoLWdv/bGRlbi1wZWFybHMt/b24taW50ZXJpb3It/d2hpdGUtc3BhY2Ut/Zm9yLXByb2R1Y3Qt/ZGlzcGxheS1vci1l/eGhpYml0aW9uLTNk/LXJlbmRlci1waG90/by5qcGc"
        checkoutHandler={checkoutHandler}
      />
       <Card
        amount={8000}
img="https://imgs.search.brave.com/fNP5Ep5Dimo2CXT-me36CeOYj6BS7a2LMVYgrdFHPtI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzU4Lzk1LzUz/LzM2MF9GXzU4OTU1/MzM3X1h1RGJrdVIw/M1daVE9Sa2J6WHdD/RWRpbjQ1bHVuQzRC/LmpwZw"        checkoutHandler={checkoutHandler}
      />
       <Card
        amount={9000}
img="https://imgs.search.brave.com/GOt-JHWnNktuIBv1cJOexSK8dxny1c8BShShekvjYWU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODgx/ODUxNTEvcGhvdG8v/c2ltcGxlLWZyYWdy/YW5jZS1ib3R0bGUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PW9WUmxjSk5lLTJN/T2VzbWdDZVIySGRS/VjdYV1NURVRldnFY/RjRxOFhiMG89"        checkoutHandler={checkoutHandler}
      />
      
    </div>
  );
};

export default Home;
