import AppFooter from './AppFooter'

const AppFooterLayout = props => (
    <div >
        {props.children}
        <AppFooter />
    </div>
)

export default AppFooterLayout