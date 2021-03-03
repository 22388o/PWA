import { useEffect, useState } from "react";
import MainNav from "../../common/MainNav";
import "./css/index.css";
import Http from "../../utils/Http";
const signingServiceUrl = 'https://moon-sign.shock.network/sign'
const apiPubKey = 'pk_test_C8jSPDtsKQqXwP7nkScpqZI5tsaOiQPH'


const ProfilePage = () => {
  const [src,setSrc] = useState('')

  useEffect(() => {
    Http.post("/api/lnd/newaddress", {
      type: "p2wkh"
    })
    .then(res => {
      const { data } = res
      const originalUrl = `https://buy-staging.moonpay.io/?apiKey=${apiPubKey}&currencyCode=btc&walletAddress=${data.address}`
      return fetch(signingServiceUrl,{
        method: 'post',
        headers: {
          "Content-type": "application/json"
        },
        body:JSON.stringify({originalUrl})
      })
    })
    .then(res => res.json())
    .then(json =>{
      if(json.urlWithSignature){
        setSrc(json.urlWithSignature)
        console.log("MOONPAY SIGNATURE DONE"+json.urlWithSignature)
      }
    })
    .catch(e => {
      console.log('Error generating MoonPay signature')
      console.log(e)
    })
  },[])
  return <div className='moonPayContainer'>
    <MainNav pageTitle='MOONPAY' enableBackButton={true} />
    <iframe width='100%' height='100%' src={src}>
    </iframe></div>
};

export default ProfilePage;
