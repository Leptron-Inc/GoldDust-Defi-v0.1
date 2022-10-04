//  _____     ________  _______   _________  _______      ___   ____  _____       _____                  
// |_   _|   |_   __  ||_   __ \ |  _   _  ||_   __ \   .'   `.|_   \|_   _|     |_   _|                 
//   | |       | |_ \_|  | |__) ||_/ | | \_|  | |__) | /  .-.  \ |   \ | |         | |   _ .--.   .---.   
//   | |   _   |  _| _   |  ___/     | |      |  __ /  | |   | | | |\ \| |         | |  [ `.-. | / /'`\] 
//  _| |__/ | _| |__/ | _| |_       _| |_    _| |  \ \_\  `-'  /_| |_\   |_       _| |_  | | | | | \__.  
// |________||________||_____|     |_____|  |____| |___|`.___.'|_____|\____|     |_____|[___||__]'.___.'   
                                                                          
const { network } = require("hardhat")

async function moveBlocks(amount) {
    console.log("Moving blocks...")
    for (let index = 0; index < amount; index++) {
        await network.provider.request({
            method: "evm_mine",
            params: [],
        })
    }
    console.log(`Moved ${amount} blocks`)
}

module.exports = {
    moveBlocks,
}
