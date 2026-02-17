export const metadata = {
  title: "SilicyMarket",
  description: "Telegram Accounts & Stars"
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body style={{
        margin: 0,
        background: "linear-gradient(135deg, #000000, #1a0b2e)",
        color: "white",
        fontFamily: "Arial"
      }}>
        {children}
      </body>
    </html>
  )
}
