import Link from 'next/link';
import Router from 'next/router';

Router.events.on('routeChangeStart', function () {
  console.log('change')
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
      <Link href='/toolkit'>
        <button>toolkit demo</button>
      </Link>
      <br />
      <Link href='/mobx'>
        <button>mobx demo</button>
      </Link>
    </div>
  );
}
