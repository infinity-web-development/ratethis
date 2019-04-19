import AppHeader from './AppHeader'

const HeaderLayout = props => (
  <div >
    <AppHeader />
    {props.children}
  </div>
)

export default HeaderLayout