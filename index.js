import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka()
    .use(
        compression({ threshold: 0 }),
        sirv('public', { dev })
    )
    .listen(3000, err => {
        if (err) console.log('error', err);
    });

