import { Box, Button, FormControl, FormLabel, Heading, Input, Select, Textarea } from "@chakra-ui/react"
import axios from "axios";
import { useState } from "react"
import { BASE_URL_SERVER } from "../../constants/routes";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



function Detection() {
  const [review, setReview] = useState("");
  const [payment_type, setPaymentType] = useState("");
  const [amount, setAmount] = useState("");
  const [oldAmount, setOldAmount] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [url, setUrl] = useState("");



  const checkFakeReviews = (e) => {
    e.preventDefault();
    let data = new FormData()
    data.append("text", review)
    axios.post(`${BASE_URL_SERVER}/predict-review`, data).then((response) => {
      if(response?.data?.isError){
        toast.error(response.data.result);
      }else{
        toast.success(response.data.result);
      }
    }).catch((err) => {
      toast.error("Internal Server Error");
    });
  }
  const checkFakePayment = (e) => {
    e.preventDefault();
    let data = new FormData()
    data.append("type", payment_type)
    data.append("amount", amount)
    data.append("oldAmount", oldAmount)
    data.append("newAmount", newAmount)
    axios.post(`${BASE_URL_SERVER}/predict-payment`, data).then((response) => {
      console.log(response.data)
      if(response?.data?.isError){
        toast.error(response.data.result);
      }else{
        toast.success(response.data.result);
      }
    }).catch((err) => {
      toast.error("Internal server error");
    });
  }
  const checkFakeWebsites = (e) => {
    e.preventDefault();
    let data = new FormData()
    data.append("url", url)
    axios.post(`${BASE_URL_SERVER}/predict-phishing-site`, data).then((response) => {
      console.log(response.data)
      if(response?.data?.isError){
        toast.error(response.data.result);
      }else{
        toast.success(response.data.result);
      }
    }).catch((err) => {
      toast.error("Internal Server Error");
    });
  }





  return (
    <>
    
      <ToastContainer/>






      <Heading textAlign="center" p={5} color="tomato" fontSize={{sm:"25px",md:"30px", lg:"40px"}}>Fake Reviews Identifier</Heading>
      <FormControl p={5}>
        <FormLabel>Enter Review to check:</FormLabel>
        <Textarea value={review} onChange={(e)=>setReview(e.target.value)} size="md" placeholder='Enter Review to check' />
        <Button mt="10px" display={"flex"} color={"white"} bg={"tomato"} onClick={checkFakeReviews}>Check</Button>
      </FormControl>







      <Heading textAlign="center" p={5} color="tomato"  fontSize={{sm:"25px",md:"30px", lg:"40px"}} mt="50px">Fake Payment Identifier</Heading>

      <FormControl p={5} display="flex" gap="20px" flexDir="column">

        <Box display="flex" gap={{md: "10px",sm:"0px"}} width="100%" flexDir={{base: "column", md:"row", lg: "row"}}>
          <Box width="100%">
            <FormLabel>Enter Payment Type:</FormLabel>
            <Select value={payment_type} type="number" onChange={(e)=>setPaymentType(e.target.value)} size="md" placeholder='Enter Payment type'>
              <option value="1">CASH_OUT</option>
              <option value="2">PAYMENT</option>
              <option value="3">CASH_IN</option>
              <option value="4">TRANSFER</option>
              <option value="5">DEBIT</option>
            </Select>
          </Box>

          <Box width="100%">
            <FormLabel>Enter moved payment: </FormLabel>
            <Input value={amount} type="number" onChange={(e)=>setAmount(e.target.value)} size="md" placeholder='Enter moved amount' />
          </Box>
        </Box>
        
        <Box display="flex" gap="10px" width="100%" flexDir={{md:"row", sm: "column"}}>
          <Box width="100%">
            <FormLabel>Enter Old Balance in your account:</FormLabel>
            <Input value={oldAmount} type="number" onChange={(e)=>setOldAmount(e.target.value)} size="md" placeholder='Enter Old Balance in your account' />
          </Box>

          <Box width="100%">
            <FormLabel>Enter new balance after amount moved:</FormLabel>
            <Input value={newAmount} type="number" onChange={(e)=>setNewAmount(e.target.value)} size="md" placeholder='Enter new balance after amount moved' />
          </Box>
        </Box>

        <Button mt="10px" display={"flex"} color={"white"} bg={"tomato"} onClick={checkFakePayment}>Check</Button>
      </FormControl>







      <Heading textAlign="center" p={5} color="tomato"  fontSize={{sm:"25px",md:"30px", lg:"40px"}} mt="50px">Phishing Website Identifier</Heading>
      <FormControl p={5}>
        <FormLabel>Enter website URL to check:</FormLabel>
        <Textarea value={url} onChange={(e)=>setUrl(e.target.value)} size="md" placeholder='Enter Review to check' />
        <Button mt="10px" display={"flex"} color={"white"} bg={"tomato"} onClick={checkFakeWebsites}>Check</Button>
      </FormControl>
    
    </>

  )
}

export default Detection