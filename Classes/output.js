class Output {
    coins;
    len;
    key;

    set coins(coins)
    {
        this.coins = coins;
    }

    get coins ()
    {
        return this.coins;
    }


    set len(pubKeyLen)
    {
        this.len = pubKeyLen;
    }
    
    get len()
    {
        return this.len;
    }

    set key(pubKey)
    {
        this.key = pubKey;
    }

    get key()
    {
        return this.key;
    }
}


module.exports = Output;