import { ArrowBack, Visibility, VisibilityOff } from '@mui/icons-material'
import { Alert, Box, Button, CircularProgress, IconButton, InputAdornment, Modal, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { validateEmail } from '../helpers/emailValidatte'
import { resetLoginFormStatus, userLogin } from '../state/slices/user'

function Login() {


    let userState = useSelector(state => state.user)
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let [loginDetails, setLoginDetails] = React.useState({ email: '', password: '' })
    let [errorDetails, setErrorDetails] = React.useState({ email: { hasError: false, msg: '' }, password: { hasError: false, msg: '' }, isFormValid: false })
    let [showPassword, setShowPassword] = React.useState(false)

    React.useEffect(() => {
        dispatch(resetLoginFormStatus())
    },[])

    let formSubmitHandler = (e) => {
        e.preventDefault();

        if ((!errorDetails.email.hasError && Boolean(loginDetails.email)) &&
            (!errorDetails.password.hasError && Boolean(loginDetails.password))) {
            dispatch(userLogin({ email: loginDetails.email, password: loginDetails.password }))
        } else {
            console.log('not submitted')
        }
    }
    

    let emailChangeHandler = (e) => {
        setLoginDetails({ ...loginDetails, email: e.target.value })
        if (!validateEmail(e.target.value)) {
            setErrorDetails({
                ...errorDetails,
                email: {
                    hasError: true,
                    msg: 'Invalid Email'
                },
                isFormValid: false
            })
        } else {
            setErrorDetails({
                ...errorDetails,
                email: {
                    hasError: false,
                    msg: ''
                },
                isFormValid: Boolean(true && !errorDetails.password.hasError && loginDetails.password)
            })
        }
    }

    let passwordChangeHandler = (e) => {
        setLoginDetails({ ...loginDetails, password: e.target.value })
        if (e.target.value.length < 5) {
            setErrorDetails({
                ...errorDetails,
                password: {
                    hasError: true,
                    msg: 'Password must be at least 8 characters'
                },
                isFormValid: false
            })
        } else {
            setErrorDetails({
                ...errorDetails,
                password: {
                    hasError: false,
                    msg: ''
                },
                isFormValid: Boolean(true && !errorDetails.email.hasError && loginDetails.email)
            })
        }
    }

    let passwordvisibilityHandler = () => {
        setShowPassword(!showPassword)
    }

    let handleModalClose = () => {
        dispatch(resetLoginFormStatus())
    }

    if(userState.userLogIn.successMsg){
        navigate('/home')
    }
    return (
        <Box py={5} bgcolor='#f8f8f8' height={'100vh'} display='flex' justifyContent='center' >

            {/* log in state UI */}
            <Modal
                open={userState.userLogIn.loading ||
                    userState.userLogIn.errorMsg ||
                    userState.userLogIn.successMsg
                }
                onClose={handleModalClose}
            >
                <Box display='flex'
                    position='absolute'
                    top='50%'
                    left='50%'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                    sx={{ transform: 'translate(-50%,-50%)' }}
                >
                    {userState.userLogIn.errorMsg && <Alert severity='error'>{userState.userLogIn.errorMsg}</Alert>}
                    {userState.userLogIn.loading && <CircularProgress color='primary' />}
                </Box>
            </Modal>

            <Box display={'flex'} flexDirection={'column'} justifyContent='space-between' width={{ xs: '100vw', md: '60vw', lg: '50vw' }}>
                <Box>
                    <Box display='flex' justifycontent='start' >
                    <Link to={-1}> <ArrowBack  /> </Link>
                    
                    </Box>
                    <Box display={'flex'} flexDirection='column' p={2}>
                        <Typography my={0} sx={{ fontWeight: '800' }} variant='h6'>Login to World Medical Card </Typography>
                        <Typography my={2} variant='body1' color='gray' >How would you like to sign-in?</Typography>
                    </Box>
                    <Box m={1} display='flex' justifyContent={'center'} padding={1} bgcolor='white' borderRadius={3}  >
                        {/* <Typography p={1} variant='body1'>Sign-in with Google</Typography> */}
                    </Box>
                    <Box mt={6} display={'flex'} justifyContent='center'>
                        {/* <Typography color={'lightGray'} > _______________ <Typography px={2} sx={{ display: 'inline', fontWeight: '600' }} color='gray'>OR</Typography> _______________</Typography> */}
                    </Box>

                    <Box justifyContent={'space-between'} display={'flex'} flexDirection='column'>

                        <Box m={2}>
                            <Box my={3} bgcolor='white'>
                                <TextField sx={{ m: 1 }} variant="standard" InputProps={{ disableUnderline: true, }} fullWidth={true} size='large' value={loginDetails.email}
                                    onChange={emailChangeHandler} label='email' ></TextField>
                                {errorDetails.email.hasError ? <Alert sx={{ padding: 0, marginTop: 1 }} severity="error">{errorDetails.email.msg}</Alert> : <></>}
                            </Box>
                            <Box my={2} bgcolor='white' >
                                <TextField
                                    sx={{ m: 1 }}
                                    size='large'
                                    type={showPassword ? 'text' : 'password'}
                                    value={loginDetails.password}
                                    onChange={passwordChangeHandler}
                                    label='password'
                                    variant="standard"
                                    InputProps={{
                                        disableUnderline: true,
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <IconButton onClick={passwordvisibilityHandler}>
                                                    {showPassword ? <VisibilityOff /> : <Visibility></Visibility>}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    fullWidth={true}
                                ></TextField>
                                {errorDetails.password.hasError ? <Alert sx={{ padding: 0, marginTop: 1 }} severity="error">{errorDetails.password.msg}</Alert> : <></>}

                            </Box>
                        </Box>
                    </Box>

                </Box>
                <Box height='auto' m={2} mt="auto" display={'flex'} flexDirection={'column'} alignItems='center' >
                    <Typography pb={"20px"}>Don't have an account ? <Link to={"/signup"}>Sign up</Link> </Typography>
                    <Box width={'100%'} borderRadius={30} overflow='hidden'>
                        <Button onClick={formSubmitHandler} sx={{ bgcolor: !errorDetails.isFormValid || userState.userLogIn.loading ? "lightBlue" : "primary", padding: '0.7em' }} fullWidth type='submit' variant='contained'>Log in</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Login

// sx={{position:"absolute",bottom:"2em"}}