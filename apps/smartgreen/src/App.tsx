import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { useEffect, useState } from "react"
import WebApp from "@twa-dev/sdk"
import Boost from "./Pages/Boost"
import MainContent from "./components/WelcomePage/MainContent"
import UserId from "./components/HomePage/UserId"
import EarnPage from "./components/EarnPage/EarnPage"
import AirdropPage from "./components/Airdrop/AirdropPage"
import PowerUps from "./components/powerUps/powerUps"
import { useUserApi } from "./hooks/useUserData"
import { Users } from "api-contract"
  import 'react-toastify/dist/ReactToastify.css';
import ReferralPage from "./components/referralPage/referralPage"



function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [userData, setUserData] = useState<Users | null>(null)
   const [userId, setUserId] = useState<number>()
  const [firstName, setFirstName] = useState<string | null>(null)
  const [username, setUserName] = useState<string | null>(null)
  const params = new URLSearchParams(location.search)
  const referralId = Number(params.get("referralId"))

  // const userId = 2146305061
  // const username = "habibilord"
  // const firstName = "crypto dray"
  // const referralId = 2146305061

   useEffect(() => {
    WebApp.expand()
    const id = WebApp.initDataUnsafe.user?.id
    const username = WebApp.initDataUnsafe.user?.username
    const name = WebApp.initDataUnsafe.user?.first_name || null
    if (!id && !name) return
    setUserId(id)
    setFirstName(name)
    setUserName(username!)
  }, [])

  const { getUserData } = useUserApi()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserData(userId!, firstName!, username!, referralId)
        if (response) {
          setUserData(response.data)
        } else {
          setUserData(null) // Handle case where response is null
        }
      } catch (error) {
        console.error('Error fetching user data:', error)
        setUserData(null) // Handle error case
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [userId, firstName, username, referralId])

  if (isLoading) {
    return <MainContent />
  }

  if (!userData) {
    return <div>Error: User data could not be loaded.</div> // Handle error case
  }




  return (
    <>
      <BrowserRouter>
        <AppContent userId={userId!} name={firstName} userData={userData} />
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

interface BoostProps {
  userId: number
  name: string | null
  userData: Users
}

function AppContent({ userId, name, userData }: BoostProps) {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1) // Navigate back to the previous page
  }

  useEffect(() => {
    const path = location.pathname
    console.log(path)
    if (path === "/") {
      WebApp.BackButton.isVisible = false
    } else {
      WebApp.BackButton.isVisible = true
    }
  }, [])

  WebApp.BackButton.onClick(goBack)

  return (
    <Routes>
      <Route index element={<UserId userId={userId} name={name} userData={userData} />} />
      <Route path="/boost" element={<Boost userId={userId} userData={userData} />} />
      <Route path="/tasks" element={<EarnPage userId={userId}  />} />
      <Route path='/referral' element={<ReferralPage userId={userId} userData={userData} />} />
      <Route path='/airdrop' element={<AirdropPage userId={userId}  />} />
      <Route path='/powerups' element={<PowerUps userId={userId} name={name} userData={userData} />} />
    </Routes>
  )
}

export default App
