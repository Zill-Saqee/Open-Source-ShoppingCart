import React from "react"
import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'


const stripePromise = loadStripe("pk_test_51HmAjKL0MJqcaXNQYxNgmeMfWMXh6s0bjUjQbMiB8BvXbKdNIrj7IWyiEATKhU6wxChktEuEFZ6NYiiTJDKPcRrN00cdzDpm7v")
const url = typeof window !== 'undefined' ? window.location.href : '';


export const  wrapRootElement = ({ element}) => {
    return (
      <CartProvider
      mode= "client-only"
      stripe={stripePromise}
      successUrl={`${url}/paymentsuccess`}
      cancelUrl={`${url}/CartPage`}
      currency="USD"
      allowedCountries={['US', 'GB', 'CA']}
      billingAddressCollection={true}
    >
      {element}
    </CartProvider>
    )
}
