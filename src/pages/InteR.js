import NewD from '../components/Interpolation/NewtonD.js'
import Larg from '../components/Interpolation/Lagr.js'
import Spli from '../components/Interpolation/Spli.js'
export const Inter = (props) => {
    const { comp } = props
    if (comp === 'NewD') {
        return (
            <div className="container">
                <NewD />
            </div>
        )
    } else if (comp === 'LaG') {
        return (
            <div className="container">
                <Larg />
            </div>
        )
    } else if (comp === 'Spy') {
        return (
            <div className="container">
                <Spli />
            </div>
        )
    }
    return (
        <div>
            <h1>Don't have a {comp} method in Linear Algebra</h1>
        </div>
    )
}
export default Inter
