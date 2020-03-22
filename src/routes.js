import Noteemission from './pages/Noteemission/Noteemission'
import Index from './pages/Index/Index'

const BaseRoutes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/Noteemission',
    name: 'Noteemission',
    component: Noteemission
  }
]

export {
  BaseRoutes
}
