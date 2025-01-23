import Service from "../../assets/usp/24-7.png";
import Expertise from "../../assets/usp/awareness.png";
import Personalise from "../../assets/usp/set-up.png";
import Tailored from "../../assets/usp/personalization.png";
import Transparent from "../../assets/usp/transparency.png";
import Data from "../../assets/usp/monitor.png";

export function USP() {
  return (
    <div className="py-16 max-md:py-0">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-3xl font-bold text-black mb-8">
          Why Choose Digital360?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center">
            <img src={Service} alt="" className="max-w-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Our team is available anytime to assist you.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center">
            <img src={Personalise} alt="" className="max-w-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Personalized Solutions
            </h3>
            <p className="text-gray-600">
              Every strategy is tailored to meet your goals.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center">
            <img src={Tailored} alt="" className="max-w-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tailored Strategies</h3>
            <p className="text-gray-600">
              We create custom solutions for your business.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center">
            <img src={Expertise} alt="" className="max-w-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Proven Expertise</h3>
            <p className="text-gray-600">
              A track record of delivering successful campaigns.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center max-md:hidden">
            <img src={Data} alt="" className="max-w-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Data-Driven Strategies
            </h3>
            <p className="text-gray-600">
              We use analytics to drive precise marketing results.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center max-md:hidden">
            <img src={Transparent} alt="" className="max-w-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Transparent Results</h3>
            <p className="text-gray-600">
              Quick results with detailed progress reports.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
