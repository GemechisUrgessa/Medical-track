import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link} from 'react-router-dom';
import * as React from 'react';
import Modal from '@mui/material/Modal';

const style = {
  backgroundColor:"white",
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

const Landing = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return ( 
        
        <>
     
            <Box  overflow="hidden" sx={{position:"relative",}}>
                <Box top={{xs:"0%", md:"50%"}} left={{xs:"0%", md:"10%"}} position="absolute" height="100%" sx={{ zIndex:10, opacity:""}}  >
                    <Typography fontSize={{xs:"16px", md:"30px"}}  fontWeight={"bold"}  color={"white"} borderRadius="15px"  sx={{fontWeight:"600",letterSpacing: "4px", padding:"20px",opacity:"1",background: "rgba(19, 210, 256,0.5)"}}>
                    A unique technology for safe 
                    <br />
                    and correct medical treatment
                    </Typography>
                    <Box marginTop="40px">
                        <Link to={"/signup"}   style={{ borderRadius:"10px", textDecoration: 'none',backgroundColor:"#a81515", color:"white", padding:"14px",  paddingRight:"30px",paddingLeft:"30px"  }} > Register </Link>
                    </Box>
                </Box>   
                <Box overflow={"hidden"}  ><img width="100%" objectFit="cover" src="/images/image1.jpg" alt="" /></Box>
            </Box>
            <Box  overflow="hidden" display={"flex"}  flexDirection={{xs:"column", md:"row"}} my={"60px"} width={"100%"}>
                <img src="./images/phone.jpg" alt="" />
                <Box >
                    <Box width={{xs:"90%",md:"100%"}}>
                         <img width={"100%"} src="./images/image2.png" alt="" />

                    </Box>
                    <Box marginLeft={"40px"} marginTop="40px">
                        <Link onClick={handleOpen}  style={{ borderRadius:"10px", textDecoration: 'none',backgroundColor:"#a81515", color:"white", padding:"20px",  paddingRight:"40px",paddingLeft:"40px"  }} > More Details </Link>
                    </Box>
                    
                    <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    >
                    <Box bgcolor={"white"} sx={style}>
                        <Typography fontWeight={"bold"} id="modal-modal-title" variant="h4" component="h2">
                        World Medical Card benefits:
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        - A personal and up-to-date health card is important to have available in the event of a critical situation. <br />
                        - It is useful in meeting with healthcare professionals or pharmacists who do not know you. <br />
                        - It is practical in the situation where you, for example, have to explain allergies, spectacle strength or vaccine status. <br />
                        - In the app you can choose between, English, Spanish, German, Norwegian, Swedish or Danish profile language <br />
                        - In the app you can translate medicines, diagnoses and allergies into 20 languages <br />
                        - You can choose to share your digital health card with family and other trusted people <br />
                        - World Medical Card ® for your safety in everyday life and when you are travelling <br />
                        </Typography>
                    </Box>
                    </Modal>

                </Box>
              

            </Box>

            <Box display="flex" flexDirection={{xs:"column", md:"row"}} bgcolor={"#33b9cb"} pt="50px" pb="50px" justifyContent="space-between">
                <Box  mr="5px" height="50%" textAlign={"center"}>
                    <img  src="/images/1.png" alt="" />  
                </Box>
                

                <Box mr="5px" height="50%" textAlign={"center"}>
                    <img  src="/images/2.png" alt="" />
                       
                </Box>  
                              
                
                <Box mr="5px" height="50%" textAlign={"center"}>
                    <img  src="/images/3.png" alt="" />
                </Box>
                
                <Box mr="5px" height="50%" textAlign={"center"}>
                    <img  src="/images/4.png" alt="" />
                </Box>

            </Box>

            <Box my={"60px"} width={"100%"}>
                <Box sx={{marginBottom:"6em"}}>
                    <Typography textAlign={"center"} color="#13bff2" fontWeight="bold" mb="15px" variant="h6">
                    WHAT WE DO
                    </Typography>
                    <Typography textAlign={"center"} fontWeight="bold" mb="15px" fontSize={{xs:"16px",md:"32px"}} >
                        Latest News & Articles
                    </Typography>
                </Box>
            <Box margin={"auto"} flexDirection={{xs:"column", md:"row"}} width="90%" display="flex" justifyContent="space-between">
                <Box mr="5em" >
                    <img width={"100%"} objectFit="cover"  src="/images/img8.png" alt="" />
                    <Typography variant="h6" fontWeight={"bold"} color={"#13bff2"}>
                    The most meaningful Christmas gift you can give to your employees
                    </Typography>     
                </Box>

                <Box mr="5em"  >
                    <img width={"100%"} objectFit="cover"  src="/images/img9.png" alt="" />
                    <Typography variant="h6" fontWeight={"bold"} color={"#13bff2"}>
                    Dont forget about the influenza                    </Typography>     
                </Box>                
                
                <Box  >
                    <img width={"100%"} objectFit="cover" src="/images/img6.jpg" alt="" />
                    <Typography variant="h6" fontWeight={"bold"} color={"#13bff2"}>
                    Medication in turkish
                    </Typography>     
                </Box>
        

            </Box>


            </Box>
        </>
    )
}
 
export default Landing;