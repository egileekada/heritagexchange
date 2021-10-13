import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import UserContext from '../context/UserContext'; 

function MyApp({ Component, pageProps }: AppProps) {
  return( 
    <ChakraProvider>
      <UserContext>
        <Component {...pageProps} />
      </UserContext>
    </ChakraProvider>
  ) 
}
export default MyApp
