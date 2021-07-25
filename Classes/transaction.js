class Transaction {
    timestamp;
    num_inputs;
    inputs = [];
    num_outputs;
    outputs = [];

    set timestamp(timestamp) {
        this.timestamp = timestamp;
    }

    set num_inputs(numInputs) {
        this.num_inputs = numInputs;
    }

    get num_inputs() {
        return this.num_inputs;
    }

    get timestamp() {
        return this.timestamp;
    }

    push_inputs(input) {
        this.inputs.push(input);
    }

    get_inputs() {
        return this.inputs;
    }

    set num_outputs(numOutputs) {
        this.num_outputs = numOutputs;
    }

    get num_outputs() {
        return this.num_outputs;
    }

    push_outputs(output) {
        this.outputs.push(output);
    }

    get_outputs() {
        return this.outputs;
    }
}

module.exports = Transaction;