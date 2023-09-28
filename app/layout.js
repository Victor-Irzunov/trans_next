import Header from '@/components/header/Header'
import './globals.css'
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: 'Грузоперевозки в Минске | Транспортная компания Trans-gruz.by',
  description: 'Качественные грузоперевозки в Минске и области. Мы предоставляем услуги по перевозке грузов с профессиональными грузчиками. Закажите перевозку прямо сейчас!',
};


export default function RootLayout({ children }) {
  return (
    <html lang="ru">

      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
