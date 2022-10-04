//  _____     ________  _______   _________  _______      ___   ____  _____       _____                  
// |_   _|   |_   __  ||_   __ \ |  _   _  ||_   __ \   .'   `.|_   \|_   _|     |_   _|                 
//   | |       | |_ \_|  | |__) ||_/ | | \_|  | |__) | /  .-.  \ |   \ | |         | |   _ .--.   .---.   
//   | |   _   |  _| _   |  ___/     | |      |  __ /  | |   | | | |\ \| |         | |  [ `.-. | / /'`\] 
//  _| |__/ | _| |__/ | _| |_       _| |_    _| |  \ \_\  `-'  /_| |_\   |_       _| |_  | | | | | \__.  
// |________||________||_____|     |_____|  |____| |___|`.___.'|_____|\____|     |_____|[___||__]'.___.'   
                                                                          


const { network } = require("hardhat")

async function moveTime(amount) {
    console.log("Moving blocks...")
    await network.provider.send("evm_increaseTime", [amount])

    console.log(`Moved forward in time ${amount} seconds`)
}

module.exports = {
    moveTime,
}
