const { network } = require("hardhat");

module.export = async ({ getNamedAccounts, deployments }) => {};
const { deploy } = deployments;
const { deployer } = await getNamedAccounts();
const chainID = network.config.chainId;
