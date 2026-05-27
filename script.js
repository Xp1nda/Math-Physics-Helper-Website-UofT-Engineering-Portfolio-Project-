function solveQuadratic() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);

    let discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
        document.getElementById("quadraticResult").innerText =
            "No real solutions";
        return;
    }

    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    document.getElementById("quadraticResult").innerText =
        `x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
}


function calculateTrig() {
    let angle = parseFloat(document.getElementById("angle").value);

    let radians = angle * Math.PI / 180;

    let sin = Math.sin(radians).toFixed(4);
    let cos = Math.cos(radians).toFixed(4);
    let tan = Math.tan(radians).toFixed(4);

    document.getElementById("trigResult").innerText =
        `sin: ${sin}, cos: ${cos}, tan: ${tan}`;
}


function calculateVelocity() {
    let u = parseFloat(document.getElementById("u").value);
    let a = parseFloat(document.getElementById("acceleration").value);
    let t = parseFloat(document.getElementById("time").value);

    let v = u + a * t;

    document.getElementById("physicsResult").innerText =
        `Final velocity = ${v.toFixed(2)} m/s`;
}


const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
