import { App, Help, About, Home } from '../views'
import { Feedback, Register, Business, Charge, Security, Money, Risk } from '../views/subviews/help'
import { Announcement, Commonweal, FriendLink, Introduce, News, StaffPresence, Team, Us } from '../views/subviews/about'

export const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes:[
    {
      path: 'help',
      component: Help,
      indexRoute: { component: Feedback },
      childRoutes: [
        { path: 'feedback', component: Feedback },
        { path: 'register', component: Register },
        { path: 'business', component: Business },
        { path: 'charge', component: Charge},
        { path: 'security', component: Security},
        { path: 'money', component: Money},
        { path: 'risk', component: Risk}
      ]
    },
    {
      path: 'about',
      component: About,
      indexRoute: { component: Introduce },
      childRoutes: [
        { path: 'introduce', component: Introduce },
        { path: 'team', component: Team },
        { path: 'announcement', component: Announcement },
        { path: 'staffPresence', component: StaffPresence },
        { path: 'news', component: News },
        { path: 'us', component: Us },
        { path: 'friendLink', component: FriendLink },
        { path: 'commonweal', component: Commonweal }
      ]
    }
  ]
}
