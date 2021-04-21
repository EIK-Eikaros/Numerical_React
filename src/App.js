import NavBar from './components/NavBar'
import Home from './pages/Home'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'
import './App.css'
import RootOfEquation from './pages/RoE'
import LinearP from './pages/LinearP'
import Inter from './pages/InteR'
import Reges from './pages/RegS'
import Mkb from './pages/MakeBy'
function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path={'/RootOfEquation/BSM'}>
                    <RootOfEquation comp={'Bisection'} />
                </Route>
                <Route path={'/RootOfEquation/FPM'}>
                    <RootOfEquation comp={'False'} />
                </Route>
                <Route path={'/RootOfEquation/OPM'}>
                    <RootOfEquation comp={'OneP'} />
                </Route>
                <Route path={'/RootOfEquation/NRM'}>
                    <RootOfEquation comp={'NewR'} />
                </Route>
                <Route path={'/RootOfEquation/SCM'}>
                    <RootOfEquation comp={'Secant'} />
                </Route>
                <Route path={'/LinearAlgebra/CramerRule'}>
                    <LinearP comp={'Cramer-R'} />
                </Route>
                <Route path={'/LinearAlgebra/GaussEli'}>
                    <LinearP comp={'GauE'} />
                </Route>
                <Route path={'/LinearAlgebra/GaussJor'}>
                    <LinearP comp={'GauJ'} />
                </Route>
                <Route path={'/LinearAlgebra/LUDecom'}>
                    <LinearP comp={'LUDecomposi'} />
                </Route>
                <Route path={'/LinearAlgebra/Jacobi'}>
                    <LinearP comp={'JcB'} />
                </Route>
                <Route path={'/LinearAlgebra/GaussSe'}>
                    <LinearP comp={'GauS'} />
                </Route>
                <Route path={'/LinearAlgebra/Conju'}>
                    <LinearP comp={'ConJu'} />
                </Route>
                <Route path={'/Interpolation/NewtonsDivide'}>
                    <Inter comp={'NewD'} />
                </Route>
                <Route path={'/Interpolation/Lagrange'}>
                    <Inter comp={'LaG'} />
                </Route>
                <Route path={'/Interpolation/Spline'}>
                    <Inter comp={'Spy'} />
                </Route>
                <Route path={'/Regression/Linear'}>
                    <Reges comp={'LinE'} />
                </Route>
                <Route path={'/Regression/Poly'}>
                    <Reges comp={'PolyN'} />
                </Route>
                <Route path={'/Regression/MultiL'}>
                    <Reges comp={'MultiL'} />
                </Route>
                <Route path={'/DevelopedBy'}>
                    <Mkb />
                </Route>
                <Route path={'/home'}>
                    <Home />
                </Route>
                <Route path={''}>
                    <Redirect to="/home" />
                </Route>
            </Switch>
        </Router>
    )
}
export default App
