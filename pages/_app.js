import 'tailwindcss/tailwind.css';
import Router from 'next/router';

/* Import utility tailwind css styles: */
import '../styles/global.css';

/* Import the progressbar library: */
import ProgressBar from '@badrap/bar-of-progress';

const progress = new ProgressBar( {
  size: 4,
  color: '#FE595E',
  className: 'z-50',
  delay: 100, //delay between start and finish
})

/* We tell the app, whenever we changes Routes, to do things iwth Next.js Router: */
//on start, then on finish
Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;
