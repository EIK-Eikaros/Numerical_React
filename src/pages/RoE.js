import BiSec from '../components/RofE/bisection'
import FalseP from '../components/RofE/falsepo'
import OneP from '../components/RofE/onepoint'
import NewR from '../components/RofE/newrap'
import Secant from '../components/RofE/secant'
export const RootOfEquation = (props) => {
    const { comp } = props
    if (comp === 'Bisection') {
        return (
            <div className="container">
                <BiSec />
            </div>
        )
    }
    if (comp === 'False') {
        return (
            <div className="container">
                <FalseP />
            </div>
        )
    }
    if (comp === 'OneP') {
        return (
            <div className="container">
                <OneP />
            </div>
        )
    }
    if (comp === 'NewR') {
        return (
            <div className="container">
                <NewR />
            </div>
        )
    }
    if (comp === 'Secant') {
        return (
            <div className="container">
                <Secant />
            </div>
        )
    }
    return (
        <div>
            <h1>Don't have a {comp} method in Root of Equation</h1>
        </div>
    )
}
export default RootOfEquation
