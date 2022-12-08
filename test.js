
function LaunchExtension() {
    const aelf = new window.NightElf.AElf({
        httpProvider: [
            'https://aelf-public-node.aelf.io',
        ],
        appName: 'CryptoBank Africa',
        // If you don't set pure=true, you will get old data structure which is not match aelf-sdk.js return.
        // v1.1.3  
        // 'http://127.0.0.1:8101',
        pure: true
    });

    // console.log(aelf);
    // aelf.chain.getChainStatus((error, result) => {
    //    console.log('>>>>>>>>>>>>> getChainStatus >>>>>>>>>>>>>');
    //    console.log(error, result);
    // });
    // console.log(aelf.getVersion()); // v1.1.3
    
    aelf.login({
        chainId: 'AELF',
        payload: {
            method: 'LOGIN',
            // no more need contracts
            // v1.1.3
            /* contracts: [{
                chainId: 'AELF',
                contractAddress: '4rkKQpsRFt1nU6weAHuJ6CfQDqo6dxruU3K3wNUFr6ZwZYc',
                contractName: 'token',
                description: 'token contract',
                github: ''
            }, {
                chainId: 'AELF TEST',
                contractAddress: '2Xg2HKh8vusnFMQsHCXW1q3vys5JxG5ZnjiGwNDLrrpb9Mb',
                contractName: 'TEST contractName',
                description: 'contract description',
                github: ''
            }] */
        }
    }, (error, result) => {
        console.log('login>>>>>>>>>>>>>>>>>>', result);
        // console.log(result.detail);
        var gap = '...';
        const obj = JSON.parse(result.detail);
        console.log(obj.address);

        var NightELFAddress = obj.address;
        var re1 = NightELFAddress.substring(0,6);
        var re2 = NightELFAddress.substring(43,49);
        var NightELFDisplayName = re1 + gap + re2;
        document.getElementById('aelfEX').value = NightELFDisplayName;
    });

}

