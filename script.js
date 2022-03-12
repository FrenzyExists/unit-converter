document.getElementById('in').value = ""

const dict = {
    "ft-m": 0.3048,
    "glUS-L": 3.785,
    "kg-lb": 2.20462262185,
    "c-f": [32, 9/5],
};


// Example pattern:
// 0 meters = 0.000 feet | 0 feet = 0.000 meters
const in_out = document.getElementsByClassName('in-out');
const main = () => {

    let n = document.getElementById('in').value;

    if (n == 0 || n === null) {
        n = 0
    }
    for (i = 0; i < in_out.length; i++ ) {
        in_out[i].innerHTML = n
    }
    document.getElementById('ft').innerHTML = (n*dict["ft-m"]).toFixed(3)
    document.getElementById('m').innerHTML = (n*1/dict["ft-m"]).toFixed(3)

    document.getElementById('l').innerHTML = (n*dict["glUS-L"]).toFixed(3)
    document.getElementById('gl').innerHTML = (n*1/dict["glUS-L"]).toFixed(3)

    document.getElementById('lb').innerHTML = (n*dict["kg-lb"]).toFixed(3)
    document.getElementById('kg').innerHTML = (n*1/dict["kg-lb"]).toFixed(3)

    document.getElementById('f').innerHTML = (n*dict["c-f"][1]+dict["c-f"][0]).toFixed(3)
    document.getElementById('c').innerHTML = ((n-dict["c-f"][0])/dict["c-f"][1]).toFixed(3)
}

const check = () => {
    let n = document.getElementById('in');
    if (n.value > 9999) {
        n.value = parseInt(n.value.toString().slice(0, 4))
    }

    if (!/\d/.test(n.value)) {
        n.value = n;
    }
}