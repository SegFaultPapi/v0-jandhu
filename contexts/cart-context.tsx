"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { Product } from "@/lib/products"
import { toast } from "sonner"

export interface CartItem extends Product {
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (error) {
        console.error("Error al cargar el carrito:", error)
      }
    }
  }, [])

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items))
  }, [items])

  const addToCart = (product: Product, quantity: number = 1) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)

      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity
        const updatedItems = prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: newQuantity } : item,
        )
        toast.success(`${product.name} agregado al carrito (${newQuantity})`)
        return updatedItems
      } else {
        toast.success(`${product.name} agregado al carrito`)
        return [...prevItems, { ...product, quantity }]
      }
    })
  }

  const removeFromCart = (productId: number) => {
    setItems((prevItems) => {
      const item = prevItems.find((i) => i.id === productId)
      if (item) {
        toast.success(`${item.name} eliminado del carrito`)
      }
      return prevItems.filter((item) => item.id !== productId)
    })
  }

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }

    setItems((prevItems) =>
      prevItems.map((item) => (item.id === productId ? { ...item, quantity } : item)),
    )
  }

  const clearCart = () => {
    setItems([])
    toast.success("Carrito vaciado")
  }

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart debe usarse dentro de un CartProvider")
  }
  return context
}



