import Cramer from '../components/Linear/cramer'
import GE from '../components/Linear/GaussE'
import GJ from '../components/Linear/GaussJ'
import LU from '../components/Linear/LuDecom'
import JcB from '../components/Linear/Jacobi'
import GauS from '../components/Linear/GaussS'
import ConJu from '../components/Linear/Conju'
export const LinearP = (props) => {
    const { comp } = props
    if (comp === 'Cramer-R') {
        return (
            <div className="container">
                <Cramer />
            </div>
        )
    } else if (comp === 'GauE') {
        return (
            <div className="container">
                <GE />
            </div>
        )
    } else if (comp === 'GauJ') {
        return (
            <div className="container">
                <GJ />
            </div>
        )
    } else if (comp === 'LUDecomposi') {
        return (
            <div className="container">
                <LU />
            </div>
        )
    } else if (comp === 'JcB') {
        return (
            <div className="container">
                <JcB />
            </div>
        )
    } else if (comp === 'GauS') {
        return (
            <div className="container">
                <GauS />
            </div>
        )
    } else if (comp === 'ConJu') {
        return (
            <div className="container">
                <ConJu />
            </div>
        )
    }
    return (
        <div>
            <h1>Don't have a {comp} method in Linear Algebra</h1>
        </div>
    )
}
export default LinearP
