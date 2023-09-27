import Header from './components/Header/Header'
import Preview from './components/Preview/Preview'

import './scss/style.scss'

function App(): JSX.Element {
  return (
    <div className='page'>
      <Header />
      <div className='main'>
        <Preview />
      </div>
    </div>
  )
}

export default App
