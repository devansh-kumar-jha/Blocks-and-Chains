class Input {
    txnid;
    index;
    siglength;
    sig;

    set txnid(txnID)
    {
        this.txnid = txnID;
    }

    get txnid ()
    {
        return this.txnid;
    }

    set index(index)
    {
        this.index = index;
    }

    get index ()
    {
        return this.index;
    }

    set siglength(sigLength)
    {
        this.siglength = sigLength
    }

    get siglength()
    {
        return this.siglength;
    }

    set sig(sig)
    {
        this.sig = sig;
    }

    get sig()
    {
        return this.sig;
    }
}

module.exports = Input;