// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const NFTMinter = await hre.ethers.getContractFactory("NFTMinter");
  const nftminter = await NFTMinter.deploy();

  await nftminter.deployed();

  console.log(
    'NFT MInter Contract Deployed To Mumbai TestNet Successfully: ' + nftminter.address
  );


  const Marketplace = await hre.ethers.getContractFactory("NftMarketplace");
  const marketplace = await Marketplace.deploy();

  await marketplace.deployed();

  console.log(
    'Marketplace Contract Deployed To Mumbai TestNet Successfully: ' + marketplace.address
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
