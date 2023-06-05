const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const app = express();
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');
const PORT = process.env.PORT_BE || 8000;
const colors = require('colors');
const Order = require('./models/orderModel');
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

var corsOptions = {
  origin: 'http://localhost:3000'
};

const calculateOrderAmount = (orderItems) => {
  const itemsPrice = orderItems.reduce((prevValue, currValue) => prevValue + currValue.price * currValue.amount, 0);
  return itemsPrice * 100;
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors(corsOptions));

app.use(
  express.json({
    verify: function (req, res, buf) {
      if (req.originalUrl.startsWith('/webhook')) {
        req.rawBody = buf.toString();
      }
    }
  })
);

app.post('/webhook', async (req, res) => {
  let data, eventType;

  if (process.env.STRIPE_WEBHOOK_SECRET) {
    let event;
    let signature = req.headers['stripe-signature'];
    try {
      event = stripe.webhooks.constructEvent(
        req.rawBody,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`);
      return res.sendStatus(400);
    }
    data = event.data;
    eventType = event.type;
  } else {
    data = req.body.data;
    eventType = req.body.type;
  }

  if (eventType === 'payment_intent.succeeded') {
    console.log('💰 Payment captured!');
  } else if (eventType === 'payment_intent.payment_failed') {
    console.log('❌ Payment failed.');
  }
  res.sendStatus(200);
});

app.get('/', (req, res) => {
  res.send('<h1>Bonjour Chez Taha\'s Food !</h1>');
});

db.once('open', () => {
  console.log('Database connected!'.yellow.underline);
});

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`.cyan.underline);
});

app.use('/api/', productRouter);
app.use('/auth/', userRouter);

app.post('/create-payment-intent', async (req, res) => {
  try {
    const { orderItems, shippingAddress, userId } = req.body;
    const totalPrice = calculateOrderAmount(orderItems);
    const taxPrice = 0;
    const shippingPrice = 0;

    const order = new Order({
      orderItems,
      shippingAddress,
      paymentMethod: 'stripe',
      totalPrice,
      taxPrice,
      shippingPrice,
      user: ''
    });

    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalPrice,
      currency: 'usd'
    });

    res.send({
      clientSecret: paymentIntent.client_secret
        })

    } catch (error) {
        res.status(400).json({
            error:{
                message: error.message
            }
        })
    }
})