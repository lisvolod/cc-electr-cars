import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './components/scroll-to-top'
import { Home } from './pages/home'
import { CompositionCC } from './pages/composition-cc'
import { HistoryCC } from './pages/history-cc'
import { CertificationTraining } from './pages/certification-training'
import { MaterialBase } from './pages/material-and-technical-base-cc'
import { Specialty } from './pages/specialty'
import { OurStakeholders } from './pages/our-stakeholders'
import { EducationalAndProfessionalPrograms } from './pages/educational-and-professional-programs'
import { Subjects } from './pages/subjects'
import { MethodicalRecommendations } from './pages/methodical-recommendations'
import { QualificationWorkDp } from './pages/qualification-work-dp'
import { Practices } from './pages/practices'
import { ScientificWork } from './pages/scientific-work'
import { OurAchievements } from './pages/our-achievements'
import { OurGraduates } from './pages/our-graduates'
import { StudentLeisureTime } from './pages/student-leisure-time'
import { Contacts } from './pages/contacts'
import { NotFound } from './pages/not-found'

// import { Stub } from './pages/stub'

// Сторінки які ще не переписані — тимчасово показуємо заглушку
// const STUB_ROUTES = [
//   // { path: '/history-cc',                              title: 'Історія ЦК' },
//   // { path: '/composition-cc',                          title: 'Склад ЦК' },
//   // { path: '/certification-training',                  title: 'Підвищення кваліфікації' },
//   // { path: '/material-and-technical-base-cc',          title: 'Матеріально-технічна база' },
//   // { path: '/specialty',                               title: 'Спеціальність' },
//   // { path: '/our-stakeholders',                        title: 'Наші стейкхолдери' },
//   // { path: '/our-graduates',                           title: 'Наші випускники' },
//   // { path: '/educational-and-professional-programs',   title: 'Освітньо-професійні програми' },
//   // { path: '/syllabuses',                              title: 'Дисципліни (силабуси)' },
//   // { path: '/methodological-recommendations-for-KP',   title: 'Методичні рекомендації до КР' },
//   // { path: '/qualification-work-dp',                   title: 'Кваліфікаційна робота (ДП)' },
//   // { path: '/practices',                               title: 'Практики' },
//   // { path: '/scientific-work',                         title: 'Наукові роботи' },
//   // { path: '/our-achievements',                        title: 'Наші досягнення' },
//   // { path: '/student-leisure-time',                    title: 'Студентське дозвілля' },
//   // { path: '/contacts',                                title: 'Контакти' },
  
// ]

function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/composition-cc" element={<CompositionCC />} />
        <Route path="/history-cc" element={<HistoryCC />} />
        <Route path="/certification-training" element={<CertificationTraining />} />
        <Route path="/material-and-technical-base-cc" element={<MaterialBase />} />
        <Route path="/specialty" element={<Specialty />} />
        <Route path="/our-stakeholders" element={<OurStakeholders />} />
        <Route path="/our-graduates" element={<OurGraduates />} />
        <Route path="/educational-and-professional-programs" element={<EducationalAndProfessionalPrograms />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/methodical-recommendations" element={<MethodicalRecommendations />} />
        <Route path="/qualification-work-dp" element={<QualificationWorkDp />} />
        <Route path="/practices" element={<Practices />} />
        <Route path="/scientific-work" element={<ScientificWork />} />
        <Route path="/our-achievements" element={<OurAchievements />} />
        <Route path="/student-leisure-time" element={<StudentLeisureTime />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />

        {/* {STUB_ROUTES.map(({ path, title }) => (
          <Route
            key={path}
            path={path}
            element={<Stub title={title} />}
          />
        ))} */}
      </Routes>
    </BrowserRouter>
  )
}

export default App