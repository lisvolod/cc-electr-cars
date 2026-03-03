import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './components/scroll-to-top'
import { Home } from './pages/home'
import { CompositionCC } from './pages/composition-cc'
import { HistoryCC } from './pages/history-cc'
import { CertificationTraining } from './pages/certification-training'

import { Stub } from './pages/stub'

// Сторінки які ще не переписані — тимчасово показуємо заглушку
const STUB_ROUTES = [
  // { path: '/history-cc',                              title: 'Історія ЦК' },
  // { path: '/composition-cc',                          title: 'Склад ЦК' },
  // { path: '/certification-training',                  title: 'Підвищення кваліфікації' },
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
     <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/composition-cc" element={<CompositionCC />} />
        <Route path="/history-cc" element={<HistoryCC />} />
        <Route path="/certification-training" element={<CertificationTraining />} />

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