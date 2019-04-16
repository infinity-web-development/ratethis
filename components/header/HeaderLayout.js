import AppHeader from './Header'

const HeaderLayout = props => (
  <div >
    <AppHeader />
    {props.children}
  </div>
)

export default HeaderLayout