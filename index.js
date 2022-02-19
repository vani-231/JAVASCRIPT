var k = 0;
var div = document.getElementById("scroll")


function load(nums = 25) {
    let i = 1;
    while (i < nums) {
        var h = document.createElement("h1")
        h.textContent = "Masai Student " + i
        console.log(i);
        div.appendChild(h)
        i++
    }

}

load()

window.addEventListener("scroll", () => {
    console.log("scrolled", window.scrollY);
    console.log(window.innerHeight);
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        load()
    }
})
