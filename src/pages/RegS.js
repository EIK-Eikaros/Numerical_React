import Line from '../components/Regress/Linear'
import Multi from '../components/Regress/Multi'
import PolyN from '../components/Regress/Polyno'
export const Reges = (props) => {
    const { comp } = props
    if (comp === 'LinE') {
        return (
            <div className="container">
                <Line />
            </div>
        )
    } else if (comp === 'PolyN') {
        return (
            <div className="container">
                <PolyN />
            </div>
        )
    } else if (comp === 'MultiL') {
        return (
            <div className="container">
                <Multi />
            </div>
        )
    }
    return (
        <div>
            <h1>Don't have a {comp} method in Linear Algebra</h1>
        </div>
    )
}
export default Reges
