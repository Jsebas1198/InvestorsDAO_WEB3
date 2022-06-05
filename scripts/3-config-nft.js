import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop(
  "0x6282E1851A25C21B5F8147978e6BCA6725D9DF29"
);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Bag of money to invest",
        description: "This NFT will give you access to InvestorsDAO!",
        image: readFileSync("scripts/assets/money_investment_nft.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
