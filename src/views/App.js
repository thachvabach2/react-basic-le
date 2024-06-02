import './App.scss'

import logo from './logo.svg'
import MyComponent from './Example/MyComponent'
import ListTodo from './Todos/ListTodo'
import Nav from './Nav/Nav'
import Home from './Example/Home'
import ListUser from './User/ListUser'
import DetailUser from './User/DetailUser'

import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
// import { Route } from 'react-router'

// là function component, return JSX
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <Nav />
                    <img src={logo} className="App-logo" alt="logo" />

                    {/* Không có Switch thì nó sẽ render nhiều component cùng lúc */}
                    <Switch>
                        {/* exact: chỉ chính xác đường dẫn '/', nếu k có exact thì vào url /todo cũng vào url / */}
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/todo">
                            <ListTodo />
                        </Route>
                        <Route path="/about">
                            <MyComponent />
                        </Route>
                        <Route path="/user" exact>
                            <ListUser />
                        </Route>
                        <Route path="/user/:id">
                            <DetailUser />
                        </Route>
                    </Switch>
                </header>

                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        </BrowserRouter>
    )
}

export default App
