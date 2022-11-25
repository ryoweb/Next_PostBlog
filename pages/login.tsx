import Button from '../components/Button'
import { login, logout } from '../lib/auth'

const LoginPage = () => {

    return (
        <div>
            <h1>ログイン画面</h1>
            <Button type="button" onClick={login}>login
            </Button>

            <Button type="button" onClick={logout}>logout
            </Button>

        </div >
    )
}

export default LoginPage