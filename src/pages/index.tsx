import Link from 'next/link';
import Router from 'next/router';

Router.events.on('routeChangeStart', function () {
  Array.from(document.getElementsByClassName('line')).forEach((dom) =>
    dom.removeAttribute('style')
  );
});

export default function Index() {
  return (
    <div>
      <Link href='/redux'>
        <button>redux demo</button>
      </Link>
      <Link href='/mobx'>
        <button>mobx demo</button>
      </Link>
    </div>
  );
}
