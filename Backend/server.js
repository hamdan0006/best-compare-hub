const dotenv = require('dotenv');
dotenv.config(); 

const express =require('express');
const app = express();
const routes=require('./routes/main-route');
const mongoose=require('mongoose');
const path = require("path");
const cors = require('cors');
const sitemap=require('./routes/main-route');
const AuthRouter =require('./routes/sign-user-route')

app.use(express.json());

app.use(cors()); 

app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'UPDATE',"DELETE" ], 
  allowedHeaders: ['Content-Type', 'Authorization'] 
}));

// Routes
app.use('/', routes);
app.use('/credit-cards', routes);
app.use('/credit-cards/welcome-offers', routes);
app.use('/credit-cards/balance-transfer', routes);

app.use('/', AuthRouter);


app.use('/credit-cards/airport-services', routes);

app.use('/credit-cards/free-for-life', routes);



app.use('/credit-cards/apply', routes);
app.use('/apply-now', routes);

app.use('/personal-loan/apply-now', routes);

app.use('/auto-loan/apply-now', routes);


app.use('/hot-promotions', routes);
app.use('/hot-promotions/apply', routes);

app.use('/contact-us', routes);

app.use('/company-listing', routes);

app.use("/", sitemap);












const PORT = process.env.PORT || 3000;






mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('DB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));


  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });




