
import Layout from './components/Layout/Layout'
import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
     <ToastContainer 
        position="top-right"
        autoClose={5000} // temps en ms
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" // Choix de theme: "light", "dark", "colored"
      />
     <Layout/>
     </>
     
  )
}

export default App
