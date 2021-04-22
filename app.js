const express = require("express")
const app = express()
const port = 3000
const homepageRoutes = require("./routes/homepage")
const loginRoutes = require("./routes/login")
const registerRoutes = require("./routes/register")
const orderRoutes = require("./routes/order")
const membershipRoutes = require("./routes/membership")
const profilRoutes = require("./routes/profil")

app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))

app.use("/homepage", homepageRoutes)
// app.use("/login", loginRoutes)
// app.use("/register", registerRoutes)
// app.use("/order", orderRoutes)
// app.use("/membership", membershipRoutes)
// app.use("/profil", profilRoutes)

app.listen(port,()=>{
    console.log(`Berada di port ${port}`);
})