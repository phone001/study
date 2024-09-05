import { Dim, SMain } from '../atoms/styleNodes/Styles'
import Header from '../molecule/Header';
import Body from '../molecule/Body';
import Footer from '../molecule/Footer';
const Main = () => {
    return (
        <SMain>
            <Dim>
                <Header />
                <Body />
                <Footer />
            </Dim>
        </SMain>
    )
}
export default Main;