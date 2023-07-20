import { Button, Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import { BiHomeAlt2 } from 'react-icons/bi'

import App from './app'
import { CONFIG } from './config'

export default function layout() {
  return (
    <>
      <header className='py-3'>
        <div className='container d-flex align-items-center justify-content-between'>
          <h1 className='h4 mb-0'>{CONFIG.app.name} Task</h1>
          <Link to={CONFIG.urls.home} className='text-decoration-none'>
            <Button className='home-btn px-5 py-2'>
              <BiHomeAlt2 />
              Home
            </Button>
          </Link>
        </div>
      </header>

      <main>
        <Container className='pt-5'>
          <App />
        </Container>
      </main>

      <footer className='p-3 text-center'>
        &copy; Anas Academy {new Date().getFullYear()}
      </footer>
    </>
  )
}
