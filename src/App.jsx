import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { media } from './media'
import P3Menu from './P3Menu'
import ResumePage from './ResumePage'
import PageTransition from './PageTransition'
import Socials from './Socials'
import AboutMe from './AboutMe'
import ProjectsPage from './ProjectsPage'
import ProjectDetailPage from './ProjectDetailPage'
import SkillsPage from './SkillsPage'
import './App.css'

function MenuScreen() {
  const navigate = useNavigate()
  return (
    <div id="menu-screen">
      <video src={media.menu} autoPlay loop muted playsInline />
      <P3Menu onNavigate={(page) => navigate(`/${page}`)} />
    </div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition><MenuScreen /></PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition variant="about"><AboutMe /></PageTransition>
        } />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<Socials />} />
        <Route path="/socials" element={<Navigate to="/contact" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return <AnimatedRoutes />
}
