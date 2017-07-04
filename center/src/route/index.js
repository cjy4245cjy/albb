import { App, Dashboard, Assets, RedPacket, Protocol, AccountSafety, Spread, NotFound, Privacy } from '../views'
import { TradeHis, Recharge, Withdraw, Deduction, StrategyHis } from '../views/subview/assets'

export const routes = {
  path: '/center',
  component: App,
  indexRoute: { component: Dashboard },
  childRoutes: [
    {
      path: 'assets',
      component: Assets,
      indexRoute: { component: TradeHis },
      childRoutes: [
        {
          path: 'recharge',
          component: Recharge,
          indexRoute: { component: Recharge.Fast },
          childRoutes: [
            { path: 'ebank', component: Recharge.Ebank },
            { path: 'baofu', component: Recharge.Baofu }
          ]
        },
        { path: 'withdraw', component: Withdraw },
        { path: 'deduction', component: Deduction },
        { path: 'strategy', component: StrategyHis }
      ]
    },
    { path: 'redpacket', component: RedPacket },
    { path: 'protocol', component: Protocol },
    { path: 'accountsafety', component: AccountSafety },
    { path: 'spread', component: Spread },
    { path: 'privacy', component: Privacy }
  ]
}
