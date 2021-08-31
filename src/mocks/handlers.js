import { rest } from 'msw';

export const handlers = [
  rest.get('/products', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          name: 'Akumulator 12V 20Ah 6-Dzm-20',
          price: '239',
          images: ['./assets/battery1.jpg'],
        },
        {
          id: 2,
          name: 'Akumulator 14V 22Ah 8-Dzm-22',
          price: '255.99',
          images: [
            './assets/battery2.jpg',
            './assets/battery3.jpg',
            './assets/battery4.jpg',
          ],
        },
        {
          id: 3,
          name: 'Akumulator 16V 24Ah 10-Dzm-24',
          price: '300',
          images: [
            './assets/battery5.jpg',
            './assets/battery4.jpg',
            './assets/battery3.jpg',
            './assets/battery2.jpg',
            './assets/battery1.jpg',
          ],
        },
      ])
    );
  }),
  rest.get('/products/:id', (req, res, ctx) => {
    switch (req.id) {
      case 1:
        res(
          ctx.json({
            id: 1,
            name: 'Akumulator 12V 20Ah 6-Dzm-20',
            price: '239',
          })
        );
        break;
      case 2:
        res(
          ctx.json({
            id: 2,
            name: 'Akumulator 14V 22Ah 8-Dzm-22',
            price: '255.99',
          })
        );
        break;
      case 3:
        res(
          ctx.json({
            id: 3,
            name: 'Akumulator 16V 24Ah 10-Dzm-24',
            price: '300',
          })
        );
        break;
    }
  }),
];
