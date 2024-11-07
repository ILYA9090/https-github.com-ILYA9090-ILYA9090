async function getBtcIndex() {
    const index = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await index.json();
    console.log(data);
};
console.log(getBtcIndex());
