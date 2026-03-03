import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { Stub } from './pages/stub'

// Сторінки які ще не переписані — тимчасово показуємо заглушку
const STUB_ROUTES = [
  { path: '/history-cc',                              title: 'Історія ЦК' },
  { path: '/composition-cc',                          title: 'Склад ЦК' },
  { path: '/certification-training',                  title: 'Підвищення кваліфікації' },
  { path: '/material-and-technical-base-cc',          title: 'Матеріально-технічна база' },
  { path: '/specialty',                               title: 'Спеціальність' },
  { path: '/our-stakeholders',                        title: 'Наші стейкхолдери' },
  { path: '/our-graduates',                           title: 'Наші випускники' },
  { path: '/educational-and-professional-programs',   title: 'Освітньо-професійні програми' },
  { path: '/syllabuses',                              title: 'Дисципліни (силабуси)' },
  { path: '/methodological-recommendations-for-KP',   title: 'Методичні рекомендації до КР' },
  { path: '/qualification-work-dp',                   title: 'Кваліфікаційна робота (ДП)' },
  { path: '/practices',                               title: 'Практики' },
  { path: '/scientific-work',                         title: 'Наукові роботи' },
  { path: '/our-achievements',                        title: 'Наші досягнення' },
  { path: '/student-leisure-time',                    title: 'Студентське дозвілля' },
  { path: '/contacts',                                title: 'Контакти' },
]

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {STUB_ROUTES.map(({ path, title }) => (
          <Route
            key={path}
            path={path}
            element={<Stub title={title} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App