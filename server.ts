import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

async function main() {
  try {
    await app.prepare();

    createServer((req, res) => {
      const parsedUrl = parse(req.url || '', true);
      const { pathname } = parsedUrl;

      if (pathname === '/navbar') {
        res.statusCode = 404;
        res.end('Not found');
      } else {
        handle(req, res, parsedUrl);
      }
    }).listen(3000, () => {
      console.log('> Ready on http://localhost:3000');
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main();
