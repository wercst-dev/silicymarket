"use client"

import { useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function Home() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetchListings()
  }, [])

  async function fetchListings() {
    const { data } = await supabase
      .from("listings")
      .select("*")
      .order("created_at", { ascending: false })

    setListings(data || [])
  }

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ fontSize: 32 }}>SilicyMarket</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: 20,
        marginTop: 20
      }}>
        {listings.map((item) => (
          <div key={item.id} style={{
            background: "rgba(255,255,255,0.05)",
            padding: 20,
            borderRadius: 16
          }}>
            {item.type === "account" && (
              <>
                <h3>{item.country}</h3>
                <p>Начало: {item.phone_prefix}</p>
                <p>Год: {item.year}</p>
                <p>Premium: {item.premium ? "Да" : "Нет"}</p>
                <p>Спамблок: {item.spamblock ? "Да" : "Нет"}</p>
              </>
            )}

            {item.type === "stars" && (
              <>
                <h3>⭐ {item.stars} Stars</h3>
                <p>Обращаться в ЛС: @silicy</p>
              </>
            )}

            <h2>{item.price} ₽</h2>
          </div>
        ))}
      </div>
    </div>
  )
}
