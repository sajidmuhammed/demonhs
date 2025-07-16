import ForgotPassword from '../../../../components/common/ForgotPassword';

export default async function ForgotPass({ params }){
  const {forgotpasswordtype} = await params;
  
  return(
    <ForgotPassword forgotpasswordtype = {forgotpasswordtype}/>
  )
}

