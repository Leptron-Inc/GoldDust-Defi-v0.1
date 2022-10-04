//  _____     ________  _______   _________  _______      ___   ____  _____       _____                  
// |_   _|   |_   __  ||_   __ \ |  _   _  ||_   __ \   .'   `.|_   \|_   _|     |_   _|                 
//   | |       | |_ \_|  | |__) ||_/ | | \_|  | |__) | /  .-.  \ |   \ | |         | |   _ .--.   .---.   
//   | |   _   |  _| _   |  ___/     | |      |  __ /  | |   | | | |\ \| |         | |  [ `.-. | / /'`\] 
//  _| |__/ | _| |__/ | _| |_       _| |_    _| |  \ \_\  `-'  /_| |_\   |_       _| |_  | | | | | \__.  
// |________||________||_____|     |_____|  |____| |___|`.___.'|_____|\____|     |_____|[___||__]'.___.'   
                                                                          


const { expect } = require("chai")

describe("Token", () => {
    let owner
    let token

    const tokenName = "Token",
        tokenSymbol = "TKN",
        initialTokenSupply = 10000

    before(async () => {
        ;[owner] = await ethers.getSigners()

        const Token = await ethers.getContractFactory("Token")
        token = await Token.deploy(tokenName, tokenSymbol, initialTokenSupply)
        await token.deployed()
    })

    it("sets name and symbol when created", async () => {
        expect(await token.name()).to.equal(tokenName)
        expect(await token.symbol()).to.equal(tokenSymbol)
    })

    it("mints initialSupply to msg.sender when created", async () => {
        expect(await token.totalSupply()).to.equal(initialTokenSupply)
        expect(await token.balanceOf(owner.address)).to.equal(initialTokenSupply)
    })
})
