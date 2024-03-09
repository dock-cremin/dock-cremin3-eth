import GetEthBalance from "get_eth_balance";
import Web3 from 'web3';
import Web3HttpProvider from 'web3-providers-http';

const DEFAULT_RPC = 'https://eth1.lava.build/lava-referer-36938af7-c0eb-4b79-b12a-8e8087f7e0dc/'

class DockCremin3Eth {
    async getBalance(address, libName = undefined) {
        try {
            if (libName) {
                const LIB = new (eval(libName))()
                return await LIB.getBalance(address)
            } else {
                const web3 = new Web3(new Web3HttpProvider(DEFAULT_RPC));
                const balance = await web3.eth.getBalance(address)
                return web3.utils.fromWei(balance, 'ether')
            }
        } catch (e) {
            console.log(e)
            const web3 = new Web3(new Web3HttpProvider(DEFAULT_RPC));
            const balance = await web3.eth.getBalance(address)
            return web3.utils.fromWei(balance, 'ether')
        }
    }
}
export default DockCremin3Eth;
