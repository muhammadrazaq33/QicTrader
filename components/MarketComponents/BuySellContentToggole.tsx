import React from "react";
import Filters from "./Filters";
import OfferCard from "./offer-card";
import { SellContent, type Offer } from "./SellContent";
import SellFilters from "./SellFilters";

type BuySellContentToggoleProps = {
  mode: "buy" | "sell";
};

function BuySellContentToggole({ mode }: BuySellContentToggoleProps) {
  const offers: Offer[] = [
    {
      id: "1",
      seller: "LiveYoungTrades",
      countryCode: "ZA",
      ratingPercent: 100,
      tradesCount: 622,
      paymentMethod: "FNB E-Wallet",
      rangeMin: 200,
      rangeMax: 20000,
      currency: "ZAR",
      price: 1399042.39,
      priceNote: "1 BTC = 0.92 USD",
      seenMinutesAgo: 5,
      initials: "LI",
    },
    {
      id: "2",
      seller: "CryptoSafari",
      countryCode: "ZA",
      ratingPercent: 99,
      tradesCount: 310,
      paymentMethod: "Capitec Bank Transfer",
      rangeMin: 500,
      rangeMax: 15000,
      currency: "ZAR",
      price: 857432.12,
      priceNote: "1 BTC = 0.92 USD",
      seenMinutesAgo: 12,
      initials: "CS",
    },
    {
      id: "3",
      seller: "JoburgCoins",
      countryCode: "ZA",
      ratingPercent: 98,
      tradesCount: 1048,
      paymentMethod: "Nedbank Instant Pay",
      rangeMin: 1000,
      rangeMax: 50000,
      currency: "ZAR",
      price: 2100042.05,
      priceNote: "1 BTC = 0.92 USD",
      seenMinutesAgo: 2,
      initials: "JC",
    },
  ];

  return (
    <>
      <div className=" py-4 space-y-4 w-full max-w-screen-2xl mx-auto px-3 sm:px-6 bg-[#F9FAFB]">
        {mode === "buy" ? (
          <>
            <div className="space-y-4">
              <Filters />
            </div>
            {/* Buy content (unchanged) */}
            <OfferCard
              initials="LI"
              name="LiveYoungTrades"
              country="/Flag_South_Africa.png"
              thumbs={958}
              trades={622}
              rating="100%"
              method="FNB E-WALLET"
              range="Range: 200 - 20,000 ZAR"
              priceLabel="1,399,042"
              priceDecimal=".39 ZAR"
              subRate="1 BTC = 0.92 USD"
              delta="+8.9%"
            />
            <OfferCard
              initials="CR"
              name="CryptoKing_SA"
              country="/Flag_South_Africa.png"
              thumbs={745}
              trades={489}
              rating="98%"
              method="CAPITEC PAY"
              range="Range: 500 - 15,000 ZAR"
              priceLabel="1,395,210"
              priceDecimal=".15 ZAR"
              subRate="1 BTC = 0.92 USD"
              delta="+7.8%"
            />
            <OfferCard
              initials="JD"
              name="John_Digital"
              country="/Flag_South_Africa.png"
              thumbs={890}
              trades={520}
              rating="99%"
              method="BANK TRANSFER"
              range="Range: 2,000 - 50,000 NGN"
              priceLabel="1,387,950"
              priceDecimal=".42 NGN"
              subRate="1 BTC = 1.00 USD"
              delta="+6.5%"
            />
            <OfferCard
              initials="AK"
              name="ArjunKrypto"
              country="/Flag_South_Africa.png"
              thumbs={1054}
              trades={780}
              rating="97%"
              method="UPI TRANSFER"
              range="Range: 1,000 - 75,000 INR"
              priceLabel="5,156,320"
              priceDecimal=".78 INR"
              subRate="1 BTC = 1.02 USD"
              delta="+4.2%"
            />
          </>
        ) : (
          <div className="text-[#333333]">
            <div className="space-y-4">
              <SellFilters />
            </div>
            {/* Page Title */}
            <h1 className="sm:mt-8 mt-6 text-[22px] sm:text-2xl font-semibold tracking-tight mb-4 sm:mb-5">
              Sell Offers
            </h1>

            {/* Cards List */}
            <div className="space-y-4 sm:space-y-5 ">
              {offers.map((offer) => (
                <SellContent key={offer.id} offer={offer} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default BuySellContentToggole;
