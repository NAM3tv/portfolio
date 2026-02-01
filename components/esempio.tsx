"use client"

import { useState, useEffect } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image"

// ESEMPIO 1: Card con immagine e testo
function ProductCard() {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // Simula caricamento dati (nella realtà sarà una fetch)
    setTimeout(() => setLoading(false), 2000)
  }, [])
  
  if (loading) {
    return (
      <div className="border rounded-lg p-4 space-y-3">
        {/* Skeleton immagine */}
        <Skeleton className="w-full h-48 rounded-md" />
        
        {/* Skeleton titolo */}
        <Skeleton className="h-6 w-3/4" />
        
        {/* Skeleton descrizione (2 righe) */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
        
        {/* Skeleton prezzo */}
        <Skeleton className="h-8 w-24" />
      </div>
    )
  }
  
  return (
    <div className="border rounded-lg p-4">
      <Image src="/product.jpg" width={400} height={300} alt="" className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-xl font-bold mt-3">Nome Prodotto</h2>
      <p className="text-gray-600 mt-2">Questa è una descrizione del prodotto molto interessante...</p>
      <p className="text-2xl font-bold mt-3">€29.99</p>
    </div>
  )
}

// ESEMPIO 2: Lista di card
function ProductList() {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])
  
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Mostra 6 skeleton cards */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border rounded-lg p-4 space-y-3">
            <Skeleton className="w-full h-48 rounded-md" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-8 w-24" />
          </div>
        ))}
      </div>
    )
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Prodotti veri */}
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}

// ESEMPIO 3: Profilo utente
function UserProfile() {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])
  
  if (loading) {
    return (
      <div className="flex items-start gap-4">
        {/* Avatar circolare */}
        <Skeleton className="w-20 h-20 rounded-full" />
        
        <div className="flex-1 space-y-2">
          {/* Nome */}
          <Skeleton className="h-6 w-40" />
          {/* Bio */}
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          {/* Stats */}
          <div className="flex gap-4 mt-3">
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-5 w-20" />
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="flex items-start gap-4">
      <Image src="/avatar.jpg" width={80} height={80} alt="" className="w-20 h-20 rounded-full" />
      <div>
        <h2 className="text-xl font-bold">Mario Rossi</h2>
        <p className="text-gray-600 mt-1">Developer appassionato di React e Next.js. Amo creare interfacce belle e funzionali.</p>
        <div className="flex gap-4 mt-3 text-sm text-gray-500">
          <span>150 Followers</span>
          <span>42 Following</span>
        </div>
      </div>
    </div>
  )
}

export default ProductList