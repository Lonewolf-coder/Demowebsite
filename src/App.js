import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './assets/bank logo.webp';
import FAQ from './FAQ';
import banking from './assets/banking.webp'; 
import investments from './assets/investments.webp';
import mutualFunds from './assets/mutual funds.webp';

const Navbar = () => {
  const [userDropdown, setUserDropdown] = useState(false);

  return (
    <nav className="bg-blue-700 backdrop-blur-[200px] p-4 flex items-center justify-between rounded">
      <div className="flex items-center space-x-4">
        <Link to="/" className="flex items-center">
          <img alt="bank logo" src={logo} className="h-8 w-auto" />
          <span className="text-white text-2xl font-bold ml-2">Home</span>
        </Link>
      </div>

      <div className="flex space-x-8 items-center">
        <Link to="/faq" className="text-white hover:bg-blue-700 p-2 rounded">FAQ</Link>

        <div className="relative">
          <button
            onClick={() => setUserDropdown(!userDropdown)}
            className="text-white hover:bg-blue-700 p-2 rounded"
          >
            Profile
          </button>
          {userDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
              <Link to="#" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
              <Link to="#" className="block px-4 py-2 hover:bg-gray-100">Settings</Link>
              <Link to="#" className="block px-4 py-2 hover:bg-gray-100">Sign Out</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const Dashboard = () => {
  return (
    <div className="p-8 grid grid-cols-3 gap-4 bg-blue-100">
      <div className="bg-gray-200 p-4 rounded shadow text-center">
        <img src={banking} alt="Banking" className="w-full h-32 object-cover mb-2" />
        Banking
      </div>
      <div className="bg-gray-200 p-4 rounded shadow text-center">
        <img src={investments} alt="Investment" className="w-full h-32 object-cover mb-2" />
        Investment
      </div>
      <div className="bg-gray-200 p-4 rounded shadow text-center">
        <img src={mutualFunds} alt="Mutual Funds" className="w-full h-32 object-cover mb-2" />
        Mutual Funds
      </div>
      <div>
        <h1 className='pd-2 text-3xl underline'>Banking</h1>
        <body>Kore Bank is a leading financial institution dedicated to providing a comprehensive range of banking, investment, and loan services to individuals and businesses alike. With a strong commitment to customer satisfaction, Kore Bank has established itself as a trusted partner in the financial sector, offering innovative solutions that cater to the evolving needs of its clients. Our personal banking services include savings and checking accounts, each designed to offer convenience, security, and a range of benefits tailored to meet the diverse financial goals of our customers. We pride ourselves on our cutting-edge online and mobile banking platforms, which allow our customers to manage their finances seamlessly, anywhere and at any time.

          In addition to our robust banking services, Kore Bank is at the forefront of investment opportunities, providing access to a wide array of investment products, including mutual funds, stocks, bonds, and retirement plans. Our experienced financial advisors are committed to helping clients build and manage their investment portfolios with a focus on long-term growth and financial stability. Furthermore, Kore Bank offers a variety of loan products, including personal loans, home loans, auto loans, and business loans, all designed to provide flexible financing options that meet the specific needs of our clients. With competitive interest rates, transparent terms, and a streamlined application process, Kore Bank ensures that accessing credit is both simple and stress-free.

          </body>
      </div>
      <div>
        <h1 className='pd-2 text-3xl underline'>Investments</h1>
        <body>
        At Kore Bank, our investment advice is anchored in a deep commitment to helping our clients achieve their financial goals through well-informed and strategically sound decisions. Our approach to investment advice is comprehensive and tailored, reflecting our dedication to understanding each client’s unique financial situation, objectives, and risk tolerance. We begin by engaging in detailed discussions with our clients to gain a thorough understanding of their financial goals, whether they’re looking to build wealth for the future, plan for retirement, or achieve specific short-term financial milestones. This personalized approach allows us to craft investment strategies that are not only aligned with their aspirations but also take into account their individual circumstances and preferences.

        Our team of seasoned financial advisors brings a wealth of expertise and market insight to the table, drawing on years of experience and in-depth knowledge of financial markets, investment products, and economic trends. We utilize this expertise to offer well-rounded advice that encompasses a diverse range of investment options, including equities, fixed income securities, mutual funds, and alternative investments. By leveraging our extensive research and analytical tools, we provide clients with actionable insights and recommendations that help them navigate the complexities of the investment landscape. Our advisors are adept at analyzing market conditions, assessing investment opportunities, and identifying potential risks, ensuring that our clients are well-positioned to make informed decisions.

        
        </body>
      </div>
      <div>
        <h1 className='pd-2 text-3xl underline'>Mutual funds</h1>
        <body>
        At Kore Bank, our approach to mutual funds advisory is centered around providing comprehensive, personalized guidance designed to align with your unique financial goals and risk tolerance. Our team of dedicated financial advisors is committed to helping you navigate the intricate world of mutual funds with expertise and care, ensuring that you make informed investment decisions that contribute to your long-term financial success. We understand that mutual funds can be a powerful tool for building wealth, offering diversification, professional management, and the potential for substantial returns. However, we also recognize that choosing the right mutual fund requires careful consideration of various factors, including your investment objectives, time horizon, and risk appetite.

        Our advisory process begins with a thorough assessment of your individual financial situation and goals. We take the time to understand your current financial standing, future aspirations, and any specific needs or constraints you may have. This comprehensive understanding allows us to tailor our recommendations to suit your unique circumstances, ensuring that the mutual fund options we present align with your overall financial strategy. Whether you are seeking growth through equity funds, stability through bond funds, or a balanced approach through hybrid funds, our advisors are equipped to guide you through the selection process with confidence and clarity.

        </body>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
};

export default App;
