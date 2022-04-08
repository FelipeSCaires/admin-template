import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { AppProvider } from '../data/context/AppContext';
import { clearScreenDown } from 'readline';


function MyApp({ Component, pageProps }) {

  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  ) 

}clearScreenDown
git add <div className=""></div>
export default MyApp
