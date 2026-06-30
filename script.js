const API = "http://localhost:4000";

// REGISTER CUSTOMER (EMAIL SYSTEM - PHASE 2 READY)
function registerCustomer(email){
    fetch(API + "/register", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({email})
    })
    .then(res => res.json())
    .then(data => console.log("User saved:", data));
}

// SAVE ORDER (VPN / BOT / BUNDLE)
function sendOrder(product){
    fetch(API + "/order", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            product: product,
            time: new Date()
        })
    })
    .then(res => res.json())
    .then(data => console.log("Order sent:", data));
}}
