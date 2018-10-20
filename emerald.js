class Emerald {
    constructor(testObj) {
        this.testObj = testObj;
        this.isPassing;
        this.msg;
    }

    toEq(value) {
        if (this.testObj == value) {
            this.isPassing = true;
        } else {
            this.msg = `Expected ${this.testObj} to equal ${value}`;
            this.isPassing = false;
        }
        elementBuilder(this.msg, this.isPassing);
    }

    toStrictlyEq(value) {
        if (this.testObj === value) {
            this.isPassing = true;
        } else { 
            this.msg = `Expected ${this.testObj} to be ${value}`;
            this.isPassing = false;
        }
        elementBuilder(this.msg, this.isPassing);
    }

    toInclude(value) {
        if(this.testObj.includes(value)) {
            this.isPassing = true;
        } else {
            this.msg = `Expected ${this.testObj} to include ${value}`;
            this.isPassing = false;
        }
        elementBuilder(this.msg, this.isPassing);
    }
}

let numPassing = 0;
let numFailing = 0;
let itDiv, descDiv;

const expect = (testObj) => new Emerald(testObj);

const describe = (desc, fn) => {
    descDiv = document.createElement('div');

    descDiv.innerText = desc;
    descDiv.className = 'desc'

    document
        .getElementById('test-container')
        .appendChild(descDiv)
    fn();
}

const it = (desc, fn) => {
    itDiv = document.createElement('div');
    itDiv.innerText = desc;

    try {
        fn();
    } catch(err) {
        elementBuilder(err);
    }
}

const numberBuilder = () => {
    let numContainer = document.getElementById('num-container');

    numContainer.innerText = `${numPassing + numFailing} specs | ${numFailing} failing`

    if(numFailing > 0) {
        numContainer.className = 'num-failing'
    } else {
        numContainer.className = 'num-passing'
    }
}

const elementBuilder = (msg = undefined, isPassing = false) => {
    let testDiv = document.createElement('div');

    testDiv.className = 'test-result'

    if(msg) {
        testDiv.innerText = msg;
    }

    if(isPassing) {
        itDiv.className = 'it-pass';
        numPassing++;
    } else {
        itDiv.className = 'it-fail';
        numFailing++;
    }   

    descDiv.appendChild(itDiv).appendChild(testDiv);

    numberBuilder();
}