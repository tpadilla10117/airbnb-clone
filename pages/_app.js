import 'tailwindcss/tailwind.css';

/* Import utility tailwind css styles: */
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;
