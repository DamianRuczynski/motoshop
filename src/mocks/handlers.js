import { rest } from 'msw';

export const handlers = [
  rest.get('/products', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: '1',
          name: 'Bosh battery 12V 20Ah 6-Dzm-20',
          price: '99.99',
          images: ['./assets/battery1.jpg'],
        },
        {
          id: '2',
          name: 'Five batteries bundle',
          price: '480',
          images: [
            './assets/battery5.jpg',
            './assets/battery4.jpg',
            './assets/battery3.jpg',
            './assets/battery2.jpg',
            './assets/battery1.jpg',
          ],
        },
        {
          id: '3',
          name: 'Cross motorbike',
          price: '2999.99',
          images: [
            './assets/bike1.jpg',
            './assets/bike2.jpg',
            './assets/bike3.jpg',
          ],
        },
        {
          id: '4',
          name: 'Harley Davidson motorbike',
          price: '4200',
          images: ['./assets/harley1.jpg'],
        },
        {
          id: '5',
          name: 'Motorbike helmet',
          price: '299.99',
          images: ['./assets/helmet1.jpeg'],
        },
        {
          id: '6',
          name: 'Motorbike engine',
          price: '1999.99',
          images: ['./assets/engine1.png'],
        },
      ])
    );
  }),
  rest.get('/products/:id', (req, res, ctx) => {
    switch (req.params.id) {
      case '1':
        return res(
          ctx.json({
            id: '1',
            name: 'Bosh battery 12V 20Ah 6-Dzm-20',
            price: '99.99',
            images: ['./assets/battery1.jpg'],
            desc: 'Longlife Bosh battery. Very good. Buy it.',
          })
        );
      case '2':
        return res(
          ctx.json({
            id: '2',
            name: 'Five batteries bundle',
            price: '480',
            images: [
              './assets/battery5.jpg',
              './assets/battery4.jpg',
              './assets/battery3.jpg',
              './assets/battery2.jpg',
              './assets/battery1.jpg',
            ],
            desc: "Bundle of five longlife batteries. Very very good. Don't hesitate, just buy it you little piece of shit!",
          })
        );
      case '3':
        return res(
          ctx.json({
            id: '3',
            name: 'Cross motorbike',
            price: '2999.99',
            images: [
              './assets/bike1.jpg',
              './assets/bike2.jpg',
              './assets/bike3.jpg',
            ],
            desc: 'Very nice cross bike. If you like to get dirty in the mud and look like a homeless person then this motorbike is just for you.',
          })
        );
      case '4':
        return res(
          ctx.json({
            id: '4',
            name: 'Harley Davidson motorbike',
            price: '4200',
            images: ['./assets/harley1.jpg'],
            desc: 'Harley Davidson motorbike for real alfa male. Buy it and look like a total badass!',
          })
        );
      case '5':
        return res(
          ctx.json({
            id: '5',
            name: 'Motorbike helmet',
            price: '299.99',
            images: ['./assets/helmet1.jpeg'],
            desc: 'Just a helmet. Very useful for not dying when you crash into a tree as you drive too fast.',
          })
        );
      case '6':
        return res(
          ctx.json({
            id: '6',
            name: 'Motorbike engine',
            price: '1999.99',
            images: ['./assets/engine1.png'],
            desc: 'Engine - heart of every vehicle. Very useful for making your motorbike drive. Buy it now!',
          })
        );
    }
  }),
];
