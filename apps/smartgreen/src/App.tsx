import { useStaticUserData } from "./hooks/useUserData"
import { ContextProvdider } from "./context/ContextProvider"
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { useEffect } from "react"
import WebApp from "@twa-dev/sdk"
import Boost from "./Pages/Boost"
 import MainContent from "./components/WelcomePage/MainContent"
import UserId from "./components/HomePage/UserId"
import EarnPage from "./components/EarnPage/EarnPage"
import ReferralPage from "./components/referralPage/referralPage"
import AirdropPage from "./components/Airdrop/AirdropPage"
import PowerUps from "./components/powerUps/powerUps"
// import { useState } from "react"
function App() {

// const [userId, setUserId] = useState<number>()
//   const [firstName, setFirstName] = useState<string | null>(null)
//   const params = new URLSearchParams(location.search)
//   const referralId = Number(params.get("referralId"))

  const userId = 2146305061
  const firstName = "habibilord"
  const referralId = 123
  

  const { isLoading, name } = useStaticUserData(userId, firstName, referralId)



  // useEffect(() => {
  //   WebApp.expand()
  //   const id = WebApp.initDataUnsafe.user?.id
  //   const name = WebApp.initDataUnsafe.user?.first_name || null
  //   if (!id && !name) return
  //   setUserId(id)
  //   setFirstName(name)
  // }, [])

  if (isLoading) {
    return <MainContent />
  }
  return (
    <ContextProvdider
      userId={userId}
      firstName={name}
      referralId={referralId}
    >
      <BrowserRouter>
        <AppContent userId={userId} name={name} />
      </BrowserRouter>
      <ToastContainer />
    </ContextProvdider>
  )
}

interface BoostProps {
  userId: number | undefined
  name: string | null
}
 
function AppContent({ userId, name }: BoostProps) {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1) // Navigate back to the previous page
  }

  

  useEffect(()=>{
    const path = location.pathname
    console.log(path);
    if(path == "/"){
    WebApp.BackButton.isVisible = false
    }else{
      WebApp.BackButton.isVisible = true
    }
  }, [])

  WebApp.BackButton.onClick(goBack)

  return (
    <Routes>
      <Route index element={<UserId userId={userId} name={name} />}/>
      <Route path="/referral" element={<ReferralPage userId={userId} name={name} />} />
      <Route path="/boost" element={<Boost userId={userId} name={name} />} />
      <Route path="/tasks" element={<EarnPage userId={userId} name={name} />} />
      <Route path="/airdrop" element={<AirdropPage userId={userId} name={name} />} />
      <Route path="/powerUps" element={<PowerUps userId={userId} name={name} />} />
    </Routes>
  )
}

export default App
