// import '../styles/globals.css' 

import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import UserContext from '../context/UserContext'; 
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
 
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return(  
    <QueryClientProvider client={queryClient}> 
      <ChakraProvider>
        <UserContext>
          <Component {...pageProps} />
        </UserContext>
      </ChakraProvider>
    </QueryClientProvider>
  ) 
}
export default MyApp
